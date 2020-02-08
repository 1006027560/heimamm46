import Vue from 'vue'
// 导入组件
import App from './App.vue'

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

new Vue({

  render: h => h(App),
  router
}).$mount('#app')
