
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
    home: homeReducer
})
// const store = createStore(reducer, applyMiddleware(thunk))
export const getStore = () => {
    //改变server端的store内容，那么就一定要使用serverAxios
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
export const getClientStore = () => {
    //客户端的脱水
    const defaultState = window.context.state
    //改变client端的store内容，那么就一定要使用clientAxios
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
// export default getStore