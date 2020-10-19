import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth'
import loading from './loading'
import loadContent from './loadContent'
import publicPage from './public'
import pages from './pages'
import sites from './sites'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore,
    loading,
    publicPage,
    pages,
    sites,
    loadContent
  }
})
