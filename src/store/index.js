import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sites: []
  },
  getters: {
    sites: state => state.sites,
    site: state => id => JSON.parse(JSON.stringify(state.sites.find(item => item.id === id))),
    pages: (state, getters) => projectID => JSON.parse(JSON.stringify(getters.site(projectID).pages)),
    blocks: (state, getters) => (projectID, pageID) => JSON.parse(JSON.stringify(getters.pages(projectID).find(item => item.id === pageID).content))
  },
  mutations: {
    sites: (state, data) => { state.sites = data },
    sitesAdd: (state, data) => { state.sites.push(data) },
    sitesDelete: (state, id) => { state.sites = state.sites.filter(item => item.id !== id) },
    sitesUpdate: (state, data) => { state.sites = state.sites.map(item => item.id === data.id ? data : item) }
  },
  actions: {
    sites: (state, data) => {
      state.commit('sites', data)
    },
    sitesAdd: (state, data) => {
      state.commit('sitesAdd', {
        id: Date.now().toString(),
        pages: [],
        ...data
      })
    },
    sitesDelete: (state, id) => {
      state.commit('sitesDelete', id)
    },
    sitesUpdate: (state, data) => {
      state.commit('sitesUpdate', data)
    },
    pagesAdd: (state, { id, data }) => {
      const site = state.getters.site(id)
      state.dispatch('sitesUpdate', {
        ...site,
        pages: [
          ...site.pages,
          {
            id: Date.now().toString(),
            content: [],
            ...data
          }
        ]
      })
    },
    pagesUpdate: (state, { id, data }) => {
      const site = state.getters.site(id)
      state.dispatch('sitesUpdate', {
        ...site,
        pages: site.pages.map(item => item.id === data.id ? data : item)
      })
    },
    pagesDelete: (state, { id, data }) => {
      const site = state.getters.site(id)
      state.dispatch('sitesUpdate', {
        ...site,
        pages: site.pages.filter(item => item.id !== data)
      })
    },
    constructorUpdate: (state, { projectID, pageID, data }) => {
      const site = state.getters.site(projectID)
      const page = site.pages.find(item => item.id === pageID)
      page.content = data
      state.dispatch('sitesUpdate', {
        ...site,
        pages: site.pages
      })
    }
  },
  modules: {
  }
})
