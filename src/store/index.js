
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/Home/store'

const reducer = combineReducers({
    home: homeReducer
})
// const store = createStore(reducer, applyMiddleware(thunk))
export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    //客户端的脱水
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}
// export default getStore