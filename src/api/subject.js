// 导入token工具函数
import {
    getToken
} from '../utils/token.js';
import axios from 'axios'
const subjectRequest = axios.create({
    //基地址
    baseURL: process.env.VUE_APP_URL,
    //是否跨域
    withCredentials: true
})

//添加一个请求拦截器 注册给创建的 那个请求对象
subjectRequest.interceptors.request.use(
    function (config) {
        //在发送之前 设置token
        config.headers.token = getToken();
        return config;
    },
    function (error) {
        //请求错误
        return Promise.reject(error)
    }
);

//注册一个相应拦截器
subjectRequest.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        return Promise.reject(error);
    }
);
// 学科删除
export function subjectRemove(data) {
    return subjectRequest({
      url: '/subject/remove',
      method: 'post',
      data
    });
  }
  // 学科编辑
  export function subjectEdit(data) {
    return subjectRequest({
      url: '/subject/edit',
      method: 'post',
      data
    });
  }
  // 学科状态设置
  export function subjectStatus(data) {
    return subjectRequest({
      url: '/subject/status',
      method: 'post',
      data
    });
  }
  // 学科list
  // 记住参数不同
  export function subjectList(params) {
    return subjectRequest({
      url: '/subject/list',
      method: 'get',
      // get请求的参数如何设置
      params
    });
  }
  // 学科添加
  export function subjectAdd(data) {
    return subjectRequest({
      url: '/subject/add',
      method: 'post',
      data
    });
  }
  