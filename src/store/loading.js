export default {
  state: {
    globalLoading: true
  },
  getters: {
    globalLoading: state => state.globalLoading
  },
  mutations: {
    globalLoading: (state, payload) => {
      state.globalLoading = payload
    }
  },
  actions: {
    globalLoading: (state, payload) => {
      state.commit('globalLoading', payload)
    }
  }
}
