import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'


// axios.defaults.baseURL = "api"
axios.defaults.baseURL = "/api"
// http://182.92.126.206:8082

// 前置拦截
axios.interceptors.request.use(config => {
  if (localStorage.getItem('Authorization')) {
    // config.headers.Authorization = localStorage.getItem('Authorization');
    config.headers.token = localStorage.getItem('Authorization')
  }
  console.log("config.headers.token:",config.headers.token)
  return config
})

axios.interceptors.response.use(response => {
    // let res = response.data;
    return response
    // if (res.code === 200) {
    //   return response
    // } else {
    //
    //   Element.Message.error('错了哦，这是一条错误消息', {duration: 3 * 1000})
    //
    //   return Promise.reject(response.data.msg)
    // }
  },
  error => {
    console.log(error)
    if(error.response.data) {
      error.message = error.response.data.msg
    }

    if(error.response.status === 401) {
      store.commit("REMOVE_INFO")
      router.push("/login")
    }

    Element.Message.error(error.message, {duration: 3 * 1000})
    return Promise.reject(error)
  }
)
