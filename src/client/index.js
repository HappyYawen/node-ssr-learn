//直接这样引入，浏览器会报错，Uncaught SyntaxError: Cannot use import statement outside a module
//还是需要webpack编译以下
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import { getClientStore } from '../store'
import { Provider } from 'react-redux'

const store = getClientStore()

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            {//静态Routes对象，需要渲染为Route组件
                Routes.map(route => (<Route {...route}/>))
            }
            </BrowserRouter>
        </Provider>
    )
}

//hydrate同构专用
ReactDom.hydrate(<App/>, document.getElementById('root'))