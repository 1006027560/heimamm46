//导入token工具函数
import axios from 'axios'
import {
    getToken
} from '../utils/token.js'
//抽取首页接口
const indexRequest = axios.create({
    //基地址
    baseURL:process.env.VUE_APP_URL,
    //是否跨域
    withCredentials:true
})

//用户信息 接口
export function info() {
    return indexRequest({
       url:'/info', 
       methods: 'get',
        // 设置请求头 headers 是axios定义的设置方式
       headers:{
           token:getToken()
       }
    })
}
//用户的退出 接口
export function logout() {
    return indexRequest({
       url:'/logout', 
       methods: 'get',
       headers:{
           token:getToken()
       }
    })
}