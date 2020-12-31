import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'

// const createStore = () = {

// }

export const render = (req) => {
   
    //renderToString将虚拟Dom转化为一个字符串，返回给浏览器
    const content = renderToString((
    //context数据传递
    <Provider store={getStore()}>
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    </Provider>
    )) //renderToString不会渲染绑定的事件
    return  ( 
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
       
}