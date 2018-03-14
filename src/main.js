import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//vuex状态管理
import http from './http/http'//异步请求数据封装

import {getStorage} from './assets/storage'

import Mint from 'mint-ui'//mint-ui组件
import 'mint-ui/lib/style.css'
Vue.use(Mint)


//全局守卫，某些页面需要登录状态才能进入
router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth){
		if(!getStorage('user')){
			next({
	        path: '/login'
	    })
		}else{
			next();
		}			
	}else{
		next();
	}
})


Vue.prototype.$http = http;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
