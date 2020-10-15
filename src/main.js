import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA1F_qDu3tFM103laAW003rLuXFFNJZkSg',
  authDomain: 'timewebtest-ecfdd.firebaseapp.com',
  databaseURL: 'https://timewebtest-ecfdd.firebaseio.com',
  projectId: 'timewebtest-ecfdd',
  storageBucket: 'timewebtest-ecfdd.appspot.com',
  messagingSenderId: '15281802199',
  appId: '1:15281802199:web:dce200ff9a375224c51992'
}
firebase.initializeApp(firebaseConfig)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => {
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          store.dispatch('currentUser', user.uid)
          store.dispatch('loadContent')
        }
      }
    )
    router.push('/').catch(() => {})
  }
}).$mount('#app')
