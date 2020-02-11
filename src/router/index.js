//导入vue
import Vue from 'vue'
//导入路由
// import router from 'vue-router'
import VueRouter from 'vue-router'

// 导入组件
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'

//注册路由
Vue.use(VueRouter)

//创建对象
const router = new VueRouter({
    routes: [{
            path: '/login',
            component: login
        },
        {
            path: '/index',
            component: index
        },

    ]
});
//暴露出去
export default router