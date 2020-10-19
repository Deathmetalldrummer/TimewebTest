import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: {
    sites: []
  },
  getters: {
    sites: state => JSON.parse(JSON.stringify(state.sites)),
    site: state => id => JSON.parse(JSON.stringify(state.sites.find(item => item.id === id) || {}))
  },
  mutations: {
    sitesUpdate: (state, payload) => { state.sites = payload }
  },
  actions: {
    siteCreate: (state, data) => {
      const sites = state.getters.sites
      sites.push({
        id: Date.now().toString(),
        pages: [],
        ...data
      })
      state.dispatch('sitesCollectionUpdate', sites)
    },
    siteDelete: (state, id) => {
      let sites = state.getters.sites
      const site = sites.find(item => item.id === id)
      const arrayID = site ? site.pages.map(item => item.publicID) : []
      arrayID.forEach((item) => { state.dispatch('publicDelete', item) })
      sites = sites.filter(item => item.id !== id)
      state.dispatch('sitesCollectionUpdate', sites)
    },
    sitesUpdate: (state, data) => {
      let sites = state.getters.sites
      sites = sites.map(item => item.id === data.id ? data : item)
      state.dispatch('sitesCollectionUpdate', sites)
    },
    sitesCollectionUpdate: (state, payload) => {
      firebase.firestore().collection('Users').doc(state.getters.currentUser).update({
        sites: payload
      }).then(respond => {
        state.commit('sitesUpdate', payload)
        // console.log('Document has updated', payload)
      }).catch(error => {
        console.error('Document has not deleted', error)
      })
    }
  }
}
