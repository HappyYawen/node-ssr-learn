import Mock from 'mockjs'   

//引入mock模块
var homeList = new Promise((res, rej) => {
        setTimeout(()=> {
            res(Mock.mock({
                "data|5-10":[{
                   "id|+1": 0,  //属性值自动加1，初始值0
                   "title": "@ctitle"
                }]
            }))
        }, 400)
    })
module.exports= {
    homeList
};   // 导出test1