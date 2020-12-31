import axios from 'axios'
import Mock from 'mockjs'
import { CHANGE_LIST } from './constants'

Mock.mock('http://test.com/home/data', {
    "data|5-10":[{
       "id|+1": 0,  //属性值自动加1，初始值0
       "title": "@ctitle"
    }]
})

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})

export const getHomeList = () => {
    return (dispatch) => {
        console.log("请求")
        axios.get('http://test.com/home/data')
        .then((res) => {
            const list = res.data.data
            dispatch(changeList(list))
        }).catch(e => {
            console.log(e)
        })
    }
}