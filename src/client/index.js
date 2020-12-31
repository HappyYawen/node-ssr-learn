//直接这样引入，浏览器会报错，Uncaught SyntaxError: Cannot use import statement outside a module
//还是需要webpack编译以下
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import getStore from '../store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
            {Routes}
            </BrowserRouter>
        </Provider>
    )
}

//hydrate同构专用
ReactDom.hydrate(<App/>, document.getElementById('root'))