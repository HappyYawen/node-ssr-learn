// const express = require('express')
// const app = express()
// const Home = require('./containers/home/index')
//使用webpack和babel编译，可以使用exmodule的语法了

import express from 'express'
import {render} from './utils'
// var test = require("../mock/");  //引入具体test的配置


const app = express()
app.use(express.static('public')) //如果路由访问得失静态文件，就去public的目录下去找

// /*为app添加中间件处理跨域请求*/
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// // 为每个具体的配置创建监听 
// for(let i=0;i<test.length;i++){
//     let item = test[i];
//     app.all(item.router, function(req, res) {
//         console.log("🚀 ~ file: index.js ~ line 27 ~ app.all ~ item.router", item.router)
//         res.json(item.data);
//     });
// }
//虚拟Dom是真是Dom的一个javascript对象映射，对服务端渲染提供了很大的便利
//浏览器端渲染
// ReactDom.render(<Home/>, document.getElementById('root')) //render方法把虚拟dom转化为真实dom挂载到页面root节点下
//服务端渲染
//优点：首屏渲染很快，利于seo
//缺点：react代码在服务端执行，极大消耗的是服务端的性能，react消耗计算性能，因为要计算dom的变化

//需要同构，一套react在服务器端执行执行一次，在客户端再执行一次
app.get('*', function(req,res) {
    render(req, res)
})

var server = app.listen(3000, () => {console.log('Listening at 3000 port')});