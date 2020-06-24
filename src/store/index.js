import Vue from "vue";
import Vuex from "vuex";
import Api from "../config/Api";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userDetails: {},
    testimonies:[],
    isAuthenticated: false
  },
  getters: {
    getUserDetails(state) {
      return state.userDetails
    },
    checkAuth(state) {
      return state.isAuthenticated
    }
  },
  mutations: {
    setAuthentication(state,payload) {
      state.isAuthenticated = payload
    },

    setUserDetails(state, payload) {
      state.userDetails = payload
    },

    setToken(state,payload) {
      console.log('wetin dey here',payload);
       localStorage.setItem('access_token', payload.access);
       localStorage.setItem('refresh_token', payload.refresh);
    }
  },

  actions: {
    async registerUser({ commit }, payload) {

      let res = await Api.post('/user/register/', payload)

      if (res.status == 201) {

        let { email, full_name, id, phone_number, token } = res.data

        let userData = { email, full_name, id, phone_number }

        commit('setUserDetails', userData)
        
        commit('setToken', token)

        commit('setAuthentication',true)
      } else {
        commit('setAuthentication', false)
      }
      return res
    },

    async loginUser({ commit }, payload) {
      let res = await Api.post('/user/login/', payload)

      if (res.status == 200) {

        let { email, full_name, id, phone_number, token } = res.data

        let userData = { email, full_name, id, phone_number }

        commit('setUserDetails', userData)
        
        commit('setToken', token)

        commit('setAuthentication',true)
      } else {
        commit('setAuthentication', false)
      }
      return res
    }
  },

  plugins: [
    createPersistedState(),
  ],
});
