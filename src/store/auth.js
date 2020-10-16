import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  state: {
    currentUser: null,
    error: ''
  },
  getters: {
    currentUser: state => state.currentUser,
    error: state => state.error
  },
  mutations: {
    currentUser: (state, payload) => { state.currentUser = payload },
    error: (state, payload) => { state.error = payload }
  },
  actions: {
    logIn: (state, payload) => {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(respond => {
          state.commit('currentUser', respond.user.uid)
        })
        .catch(error => {
          state.commit('error', error.message)
          console.log(error)
        })
    },
    logOut: (state) => {
      firebase.auth().signOut()
        .then(respond => {
          state.commit('currentUser', null)
        })
        .catch(error => {
          state.commit('error', error.message)
          console.log(error)
        })
    },
    signUp: (state, payload) => {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(respond => {
          firebase.firestore().collection('Users').doc(respond.user.uid).set({ name: payload.name })
          state.commit('currentUser', respond.user.uid)
        })
        .catch(error => {
          state.commit('error', error.message)
          console.log(error)
        })
    },
    currentUser: (state, payload) => state.commit('currentUser', payload)
  }
}
