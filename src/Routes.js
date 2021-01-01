import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

//静态路由，方便服务端加载store数据，并返回到客户端，渲染到浏览器中
export default [{
    key:'home',
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData
},{
    key:'login',
    path: '/login',
    component: Login,
    exact: true
}]

//同构，路由要在服务端实现一遍，在客户端也实现一遍，这样会有更好的用户体验
// export default (
//     <div>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//     </div>
// )