import Vue from 'vue'
// 导入组件
import App from './App.vue'
import store from './store/index.js' //导入仓库
// 导入全局样式
import './style/bace.css'
//导入element-ui
import ElementUI from 'element-ui';
//导入element-ui的样式
import 'element-ui/lib/theme-chalk/index.css';
//注册element-ui
Vue.use(ElementUI);
import router from './router/index.js'

Vue.config.productionTip = false
//导入全局过滤器 不需要接收
import '@/filters/index.js'
new Vue({
  render: h => h(App),
  router,
  //挂载到vue实例上  仓库
  store
}).$mount('#app')