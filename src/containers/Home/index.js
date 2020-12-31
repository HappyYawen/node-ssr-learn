//node代码结构下，不支持esmodule形式的import。只支持common.js语法结构
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

// const React = require('react')
const Home = (props) => {
    //只有在客户端渲染的时候，才会执行
    useEffect(() => {
        props.getHomeList()
    },[])
    return (
        <div>
            <Header/>
            <div>welcome to home, {props.name}!</div>
            <ul>
            {
                props.list.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
            </ul>
            <button onClick={() => {alert('home click')}}>click</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.home.name,
        list: state.home.newsList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getHomeList: () => {
            console.log("触发")
            dispatch(getHomeList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
//但是虽然导出Home，但是浏览器不能识别react语法，需要使用webpack编译代码为js，html，css这些浏览器能够识别的代码
// module.exports = {
//     default: Home
// }