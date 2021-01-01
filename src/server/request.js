import axios from 'axios'
import https from 'https'

const instance = axios.create({
    baseURL: 'https://cz.droomo.top/mock/5feee0617f482a4b8a59b35b/example',
    //添加配置，https请求，不需要SSL证书验证
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export default instance