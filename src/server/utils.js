import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'


export const render = (req, res) => {
   
    //1、服务器端不接收到请求，这个时候store是空的
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
    console.log("🚀 ~ file: utils.js ~ line 27 ~ render ~ matchedRoutes", matchedRoutes)
    matchedRoutes.forEach(item => {
        if(item.route.loadData) {
            promises.push(item.route.loadData(store))
        }
    });
   
    Promise.all(promises).then(() => {
        console.log(store.getState(),Routes)
         //renderToString将虚拟Dom转化为一个字符串，返回给浏览器
        const content = renderToString((
            //context数据传递
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    {
                    //静态Routes对象，需要渲染为Route组件
                    Routes.map(route => (
                        <Route {...route}/>
                    ))
                    }
                </StaticRouter>
            </Provider>
        )) //renderToString不会渲染绑定的事件
        res.send( 
            `<html>
                <head>
                    <title>hello</title>
                </head>
                <body>
                    <h1>first lesson</h1>
                    <p>hello world</p>
                    <div id="root">${content}</div>
                    <script src="/index.js"></script>
                </body>
            </html>`
        )
    }).catch(e => {
        console.log(e)
    })
       
}