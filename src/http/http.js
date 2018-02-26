import axios from 'axios'
import store from '../store'
import router from '../router'

//通过 axios.create创建一个实例，对该实例进行一些配置，便得到了一个专门用来与后端服务器进行通信的 ajax 函数。
const http = axios.create();
//下面一些对该实例的配置：
http.defaults.baseURL = 'http://mockapi.com';//配置 baseURL, 设置路由的转发规则。这边是配合mock.js
//在单网页应用中，通过在请求头设置一些信息
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'// 设置全局请求为ajax请求

// 请求拦截,通过配置拦截器，对请求与响应进行处理,在请求或响应被 then 或 catch 处理前拦截它们。
http.interceptors.request.use((config) => {
	// 在发送请求之前做的事情
	store.commit('SET_LOADING',true);
	
	return config
})

// 拦截响应response，并做一些错误处理
http.interceptors.response.use((response) => {
	// 对响应数据的处理
    // 加定时器主要是为了 展示Loading效果 ，正式上线项目中应去除定时器效果
    setTimeout(()=>{
      store.commit('SET_LOADING',false);
    },300)
    
    return response;
},(err)=>{
	//响应错误的处理
	store.commit('SET_LOADING',false);
	if(error.response) {

      if(error.response.status== 401) {
         // 如果返回401 即没有权限，跳到登录页重新登录
        store.commit('CHANGE_TOKEN',0);

        alert('请重新登录');

        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })

      }
    }

    return Promise.reject(error);
})

export default http