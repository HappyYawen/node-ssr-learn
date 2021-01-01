import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


export const render = (store, routes, req) => {
   
     //renderToString将虚拟Dom转化为一个字符串，返回给浏览器
     const content = renderToString((
        //context数据传递
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {
                //静态Routes对象，需要渲染为Route组件
                routes.map(route => (
                    <Route {...route}/>
                ))
                }
            </StaticRouter>
        </Provider>
    ))
    //renderToString不会渲染绑定的事件
    return (
        `<html>
            <head>
                <title>hello</title>
            </head>
            <body>
                <h1>first lesson</h1>
                <p>hello world</p>
                <div id="root">${content}</div>
                <script>
                    //客户端的注水
                    window.context = {
                        state: ${JSON.stringify(store.getState())}
                    }
                </script>
                <script src="/index.js"></script>
            </body>
        </html>`
    )
       
}