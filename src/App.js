import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config' 

const App = (props) => {
    return (
        <div>
            <Header/>
            {
                //渲染二级路由页面
                renderRoutes(props.route.routes)
            }
        </div>
    )
}

export default App
