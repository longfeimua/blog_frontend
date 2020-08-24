import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    token: '',
    id: '',
    email: '',
    name: ''
  },
  mutations: {
    login (state, data) {
      state.token = data.token
      state.id = data.id
      state.email = data.email
      state.name = data.username
    }
  },
  getters: {
    showData (state) {
      return state
    }
  }
})
