import Vue from 'vue'

import moment from 'moment'
//注册全局过滤器
Vue.filter('formatTime',value=>{
//YYYY 年
//MM月
//DD日
// return moment(value).format('YYYY//MM//DD')
    return moment(value).format('YYYY年MM月DD日')
})