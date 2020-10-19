export default {
  state: {
  },
  getters: {
    pages: (state, getters) => projectID => getters.site(projectID).pages || [],
    page: (state, getters) => (projectID, pageID) => {
      const site = getters.site(projectID)
      return site.hasOwnProperty('pages') ? site.pages.find(item => item.id === pageID) : {}
    }
  },
  mutations: {
  },
  actions: {
    pageCreate: (state, { id, data }) => {
      let site = state.getters.site(id)
      const newPage = {
        id: Date.now().toString(),
        content: [],
        public: false,
        publicID: null,
        ...data
      }
      site = {
        ...site,
        pages: [
          ...site.pages,
          newPage
        ]
      }
      state.dispatch('sitesUpdate', site)
    },
    pageDelete: (state, { id, data }) => {
      const site = state.getters.site(id)
      const page = site.pages.find(item => item.id === data)
      if (page && page.publicID) {
        state.dispatch('publicDelete', page.publicID)
      }
      const pages = site.pages.filter(item => item.id !== data)
      state.dispatch('sitesUpdate', { ...site, pages })
    },
    pagesUpdate: (state, { id, data }) => {
      const site = state.getters.site(id)
      const pages = site.pages.map(item => item.id === data.id ? data : item)
      state.dispatch('sitesUpdate', { ...site, pages })
    },
    pageUpdate: (state, { projectID, pageID, payload }) => {
      let site = state.getters.site(projectID)
      const pages = site.pages.map(item => item.id === pageID ? payload : item)
      site = { ...site, pages }
      state.dispatch('sitesUpdate', site)
    }
  }
}
