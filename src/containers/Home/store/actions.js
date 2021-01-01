import { CHANGE_LIST } from './constants'
// import test from '../../../mock/index'


const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})

//此处有一个问题，服务端渲染时，服务端请求的是localhost:3000/api,并没有走此处的代理
//解决，根据server参数，判断如果是服务端渲染，则不走代理
export const getHomeList = (server) => {
    console.log('dispatch')
    return (dispatch, getState, axiosInstance) => {
        console.log("请求")
        return axiosInstance.get('/home/list')
        .then((res) => {
            const list = res.data.data
            dispatch(changeList(list))
        }).catch(e => {
            console.log(e)
        })
    }
}