import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: {
    publicPage: null
  },
  getters: {
    publicPage: state => state.publicPage
  },
  mutations: {
    publicPage: (state, data) => { state.publicPage = data }
  },
  actions: {
    loadContent: state => {
      firebase.firestore().collection('Users').doc(state.getters.currentUser).get().then(
        respond => {
          if (respond.exists) {
            state.dispatch('sitesCollectionUpdate', respond.data().sites || [])
            state.dispatch('globalLoading', false)
          }
        }).catch(
        error => {
          state.dispatch('globalLoading', false)
          console.log(error)
        })
    },
    publicPage: (state, payload) => {
      firebase.firestore().collection('Public').doc(payload).get().then(
        respond => {
          if (respond.exists) {
            state.commit('publicPage', respond.data())
          }
        }).catch(
        error => {
          console.log(error)
        })
    }
  }
}
