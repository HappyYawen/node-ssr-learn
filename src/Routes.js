import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

//同构，路由要在服务端实现一遍，在客户端也实现一遍，这样会有更好的用户体验
export default (
    <div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
    </div>
)