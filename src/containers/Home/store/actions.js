// import axios from 'axios'
import { CHANGE_LIST } from './constants'
import test from '../../../mock/index'


const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})

export const getHomeList = () => {
    console.log('dispatch')
    return (dispatch) => {
        console.log("请求")
        return test.homeList.then((res) => {
            const list = res.data
            dispatch(changeList(list))
        }).catch(e => {
            console.log(e)
        })
    }
}