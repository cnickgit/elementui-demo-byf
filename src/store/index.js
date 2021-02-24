import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
});

export default store;


// export default new Vuex.Store({
//   state: {
//     token: '',
//     userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
//   },
//   mutations: {
//     // set
//     SET_TOKEN: (state, token) => {
//       state.token = token
//       localStorage.setItem("token", token)
//     },
//     SET_USERINFO: (state, userInfo) => {
//       state.userInfo = userInfo
//       sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
//     },
//     REMOVE_INFO: (state) => {
//       state.token = ''
//       state.userInfo = {}
//       localStorage.setItem("token", '')
//       sessionStorage.setItem("userInfo", JSON.stringify(''))
//     }
//
//   },
//   getters: {
//     // get
//     getUser: state => {
//       return state.userInfo
//     }
//
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
