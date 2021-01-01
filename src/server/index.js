// const express = require('express')
// const app = express()
// const Home = require('./containers/home/index')
//使用webpack和babel编译，可以使用exmodule的语法了

import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware' //代理服务器

import {render} from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'
import { getStore } from '../store'


const app = express()
app.use(express.static('public')) //如果路由访问得失静态文件，就去public的目录下去找

//搭建代理服务器，完善node中间层的角色
app.use('/api', createProxyMiddleware({
    target: 'https://cz.droomo.top/mock/5feee0617f482a4b8a59b35b',
    pathRewrite: {
        '^/api': '/example', // rewrite path
      },
    changeOrigin: true,
    //添加配置，https请求，不需要SSL证书验证
    secure: false
}))

//虚拟Dom是真是Dom的一个javascript对象映射，对服务端渲染提供了很大的便利
//浏览器端渲染
// ReactDom.render(<Home/>, document.getElementById('root')) //render方法把虚拟dom转化为真实dom挂载到页面root节点下
//服务端渲染
//优点：首屏渲染很快，利于seo
//缺点：react代码在服务端执行，极大消耗的是服务端的性能，react消耗计算性能，因为要计算dom的变化

//需要同构，一套react在服务器端执行执行一次，在客户端再执行一次
app.get('*', function(req, res) {

    //1、服务器端接收到请求，这个时候store是空的
    //2、服务器端不会执行useEffect，所以列表内容获取不到（查看网页源码，没有渲染列表内容）
    //3、客户端代码运行，此时store依然是空的
    //4、客户端执行useEffect，列表数据被获取
    //5、store中的列表数据被更新
    //6、客户端渲染出store中的list数据对应的列表内容
    //解决：服务器端实现类似执行useEffect的效果,来获取list数据
    //store里面到底填充什么，我们不知道，需要结合当前用户的请求地址，和路由做判断
    //如果用户返回/路径，我们就拿home组件的异步数据
    //如果用户返回/login路径，我们就拿login组件的异步数据
    const store = getStore()
    //根据路由的路径，来往store里添加数据
    const matchedRoutes = matchRoutes(Routes, req.path)
    let promises = []
    matchedRoutes.forEach(item => {
        if(item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    });
    Promise.all(promises).then(() => {
        res.send(render(store, Routes, req))
    }).catch(e => {
        console.log(e)
    })
})

var server = app.listen(3000, () => {console.log('Listening at 3000 port')});