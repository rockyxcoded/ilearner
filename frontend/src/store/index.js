import Vue from 'vue'
import Vuex from 'vuex'
import axios from "@/axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || {}
  },
  getters: {
    auth(state) {
      return !!state.token
    },
    token(state) {
      return state.token
    },
    user(state) {
      return state.user
    }

  },
  mutations: {
    register(state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    login(state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    },
    user(state, payload) {
      state.user = payload
      localStorage.setItem('user', payload)
    },
    logout(state) {
      state.user = {}
      localStorage.removeItem('token')
    }
  },
  actions: {
    register({ commit }, payload) {
      commit('register', payload)
    },
    login({ commit }, payload) {
      commit('login', payload)
    },
    user({ commit }, payload) {
      commit('user', payload)
    },
    logout({ commit }) {
      axios({
        method: 'DELETE',
        url: '/session',
      })
        .then(() => {
          commit('logout')
        })
        .catch(error => {
          console.log(error.response.data.errors[0].title)
        })
    }
  },
  modules: {
  }
})
