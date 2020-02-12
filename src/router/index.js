//导入vue
import Vue from 'vue'
//导入路由
// import router from 'vue-router'
import VueRouter from 'vue-router'

// 导入组件
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'


// 导入组件 嵌套路由 数据 chart
import chart from '@/views/index/chart/chart.vue';
// 导入组件 嵌套路由 用户 user
import user from '@/views/index/user/user.vue';
// 导入组件 嵌套路由 题库 question
import question from '@/views/index/question/question.vue';
// 导入组件 嵌套路由 企业 enterprise
import enterprise from '@/views/index/enterprise/enterprise.vue';
// 导入组件 嵌套路由 学科 subject
import subject from '@/views/index/subject/subject.vue';
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
            component: index,
            // 嵌套路由
            children: [{
                    // 路径不需要写 /
                    // 会被解析为 /index/chart
                    path: 'chart',
                    component: chart
                },
                {
                    // 路径不需要写 /
                    // 会被解析为 /index/user
                    path: 'user',
                    component: user
                },
                {
                    // 路径不需要写 /
                    // 会被解析为 /index/question
                    path: 'question',
                    component: question
                },
                {
                    // 路径不需要写 /
                    // 会被解析为 /index/enterprise
                    path: 'enterprise',
                    component: enterprise
                },
                {
                    // 路径不需要写 /
                    // 会被解析为 /index/subject
                    path: 'subject',
                    component: subject
                }
            ]
        },

    ]
});
//暴露出去
export default router