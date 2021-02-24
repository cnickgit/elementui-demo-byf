// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import ElementUI from 'element-ui'; //饿了么UI
import 'element-ui/lib/theme-chalk/index.css';  //饿了么UI
import axios from 'axios'
import "./axios"
//这里要导入store
import store from "./store";
Vue.prototype.$axios = axios;  //默认调用地址的名称
// axios.defaults.baseURL = 'https://www.hcxlyun.cn/cloud-examine'; //设置公用请求 测试环境

Vue.config.productionTip = false
Vue.use(ElementUI); //饿了么UI


//路由跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

// new Vue({
//   el: '#app',
//   store,
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  //这里要配置store
  router, store:store,
  render: function (h) { return h(App) }
}).$mount('#app')
