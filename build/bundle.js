/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//静态路由，方便服务端加载store数据，并返回到客户端，渲染到浏览器中\nexports.default = [{\n    key: 'home',\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData\n}, {\n    key: 'login',\n    path: '/login',\n    component: _Login2.default,\n    exact: true\n}];\n\n//同构，路由要在服务端实现一遍，在客户端也实现一遍，这样会有更好的用户体验\n// export default (\n//     <div>\n//         <Route path='/' exact component={Home}></Route>\n//         <Route path='/login' exact component={Login}></Route>\n//     </div>\n// )\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'home'\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/login' },\n            'login'\n        )\n    );\n};\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const React = require('react')\n//node代码结构下，不支持esmodule形式的import。只支持common.js语法结构\nvar Home = function Home(props) {\n    //只有在客户端渲染的时候，才会执行\n    (0, _react.useEffect)(function () {\n        props.getHomeList();\n    }, []);\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'welcome to home, ',\n            props.name,\n            '!'\n        ),\n        _react2.default.createElement(\n            'ul',\n            null,\n            props.list.map(function (item) {\n                return _react2.default.createElement(\n                    'li',\n                    { key: item.id },\n                    item.title\n                );\n            })\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    alert('home click');\n                } },\n            'click'\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n    return {\n        name: state.home.name,\n        list: state.home.newsList\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {\n        getHomeList: function getHomeList() {\n            console.log(\"触发\");\n            dispatch((0, _actions.getHomeList)());\n        }\n    };\n};\nHome.loadData = function (store) {\n    //这个函数，负责在服务端渲染之前，把这个路由需要的数据提前加载好\n    console.log(\"触发\");\n    return store.dispatch((0, _actions.getHomeList)());\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//但是虽然导出Home，但是浏览器不能识别react语法，需要使用webpack编译代码为js，html，css这些浏览器能够识别的代码\n// module.exports = {\n//     default: Home\n// }\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar _index = __webpack_require__(/*! ../../../mock/index */ \"./src/mock/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import axios from 'axios'\nvar changeList = function changeList(list) {\n    return {\n        type: _constants.CHANGE_LIST,\n        list: list\n    };\n};\n\nvar getHomeList = exports.getHomeList = function getHomeList() {\n    console.log('dispatch');\n    return function (dispatch) {\n        console.log(\"请求\");\n        return _index2.default.homeList.then(function (res) {\n            var list = res.data;\n            dispatch(changeList(list));\n        }).catch(function (e) {\n            console.log(e);\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = \"HOME/CHANGE_LIST\";\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = {\n    name: 'karla',\n    newsList: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constants.CHANGE_LIST:\n            return _extends({}, state, { newsList: action.list });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Header2.default, null),\n        _react2.default.createElement(\n            'div',\n            null,\n            'Login'\n        ),\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    alert('click');\n                } },\n            'click'\n        )\n    );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/mock/index.js":
/*!***************************!*\
  !*** ./src/mock/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mockjs = __webpack_require__(/*! mockjs */ \"mockjs\");\n\nvar _mockjs2 = _interopRequireDefault(_mockjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Mock.setup({\n//     timeout: 400\n// })\n//引入mock模块\nvar homeList = new Promise(function (res, rej) {\n    res(_mockjs2.default.mock({\n        \"data|5-10\": [{\n            \"id|+1\": 0, //属性值自动加1，初始值0\n            \"title\": \"@ctitle\"\n        }]\n    }));\n});\nmodule.exports = {\n    homeList: homeList\n}; // 导出test1\n\n//# sourceURL=webpack:///./src/mock/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// var test = require(\"../mock/\");  //引入具体test的配置\n\n\n// const express = require('express')\n// const app = express()\n// const Home = require('./containers/home/index')\n//使用webpack和babel编译，可以使用exmodule的语法了\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public')); //如果路由访问得失静态文件，就去public的目录下去找\n\n// /*为app添加中间件处理跨域请求*/\n// app.use(function(req, res, next) {\n//     res.header(\"Access-Control-Allow-Origin\", \"*\");\n//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');\n//     res.header(\"Access-Control-Allow-Headers\", \"X-Requested-With\");\n//     res.header('Access-Control-Allow-Headers', 'Content-Type');\n//     next();\n// });\n\n// // 为每个具体的配置创建监听 \n// for(let i=0;i<test.length;i++){\n//     let item = test[i];\n//     app.all(item.router, function(req, res) {\n//         console.log(\"🚀 ~ file: index.js ~ line 27 ~ app.all ~ item.router\", item.router)\n//         res.json(item.data);\n//     });\n// }\n//虚拟Dom是真是Dom的一个javascript对象映射，对服务端渲染提供了很大的便利\n//浏览器端渲染\n// ReactDom.render(<Home/>, document.getElementById('root')) //render方法把虚拟dom转化为真实dom挂载到页面root节点下\n//服务端渲染\n//优点：首屏渲染很快，利于seo\n//缺点：react代码在服务端执行，极大消耗的是服务端的性能，react消耗计算性能，因为要计算dom的变化\n\n//需要同构，一套react在服务器端执行执行一次，在客户端再执行一次\napp.get('*', function (req, res) {\n    (0, _utils.render)(req, res);\n});\n\nvar server = app.listen(3000, function () {\n    console.log('Listening at 3000 port');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(req, res) {\n\n    //1、服务器端不接收到请求，这个时候store是空的\n    //2、服务器端不会执行useEffect，所以列表内容获取不到（查看网页源码，没有渲染列表内容）\n    //3、客户端代码运行，此时store依然是空的\n    //4、客户端执行useEffect，列表数据被获取\n    //5、store中的列表数据被更新\n    //6、客户端渲染出store中的list数据对应的列表内容\n    //解决：服务器端实现类似执行useEffect的效果,来获取list数据\n    //store里面到底填充什么，我们不知道，需要结合当前用户的请求地址，和路由做判断\n    //如果用户返回/路径，我们就拿home组件的异步数据\n    //如果用户返回/login路径，我们就拿login组件的异步数据\n    var store = (0, _store2.default)();\n    //根据路由的路径，来往store里添加数据\n    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n    var promises = [];\n    console.log(\"🚀 ~ file: utils.js ~ line 27 ~ render ~ matchedRoutes\", matchedRoutes);\n    matchedRoutes.forEach(function (item) {\n        if (item.route.loadData) {\n            promises.push(item.route.loadData(store));\n        }\n    });\n\n    Promise.all(promises).then(function () {\n        console.log(store.getState(), _Routes2.default);\n        //renderToString将虚拟Dom转化为一个字符串，返回给浏览器\n        var content = (0, _server.renderToString)(\n        //context数据传递\n        _react2.default.createElement(\n            _reactRedux.Provider,\n            { store: store },\n            _react2.default.createElement(\n                _reactRouterDom.StaticRouter,\n                { location: req.path, context: {} },\n\n                //静态Routes对象，需要渲染为Route组件\n                _Routes2.default.map(function (route) {\n                    return _react2.default.createElement(_reactRouterDom.Route, route);\n                })\n            )\n        )); //renderToString不会渲染绑定的事件\n        res.send('<html>\\n                <head>\\n                    <title>hello</title>\\n                </head>\\n                <body>\\n                    <h1>first lesson</h1>\\n                    <p>hello world</p>\\n                    <div id=\"root\">' + content + '</div>\\n                    <script src=\"/index.js\"></script>\\n                </body>\\n            </html>');\n    }).catch(function (e) {\n        console.log(e);\n    });\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n    home: _store.reducer\n});\n// const store = createStore(reducer, applyMiddleware(thunk))\nvar getStore = function getStore() {\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\nexports.default = getStore;\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mockjs":
/*!*************************!*\
  !*** external "mockjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mockjs\");\n\n//# sourceURL=webpack:///external_%22mockjs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });