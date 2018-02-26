import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//vuex状态管理
import http from './http/http'//异步请求数据封装
import Mint from 'mint-ui'//mint-ui组件
import 'mint-ui/lib/style.css'
Vue.use(Mint)




Vue.prototype.$http = http;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
