import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  // 登录状态
  state: {
    loginstatu: true
  },
  mutations: {
    login(state, data) {
      state.loginstatu = data
    }
  },
  getters: {
    showData(state) {
      return state
    }
  }
})
