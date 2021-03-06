export default {
  state: {
    globalLoading: true
  },
  getters: {
    globalLoading: state => state.globalLoading
  },
  mutations: {
    globalLoading: (state, payload) => {
      if (!payload) {
        const elLoading = document.getElementById('loading')
        if (elLoading) elLoading.remove()
      }
      state.globalLoading = payload
    }
  },
  actions: {
    globalLoading: (state, payload) => {
      state.commit('globalLoading', payload)
    }
  }
}
