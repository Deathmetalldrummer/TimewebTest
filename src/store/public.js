import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    /*
    * payload = {
    *   projectID: string,
    *   pageID: string,
    *   payload: page
    * }
    * */
    publicCreate: (state, payload) => {
      firebase.firestore().collection('Public').add(
        JSON.parse(JSON.stringify(payload.payload))
      ).then(respond => {
        payload.payload.publicID = respond.id
        state.dispatch('pageUpdate', payload)
      }).catch(error => {
        console.log(error)
      })
    },
    /*
    * payload === page
    * */
    publicUpdate: (state, payload) => {
      firebase.firestore().collection('Public').doc(payload.payload.publicID).update(
        JSON.parse(JSON.stringify(payload.payload))
      ).then(
        respond => {
          console.log('Document has updated', respond)
        }).catch(
        error => {
          console.error('Document has not updated', error)
        })
    },
    /*
    * payload === publicID
    * */
    publicDelete: (state, payload) => {
      firebase.firestore().collection('Public').doc(payload).delete().then(
        respond => {
          console.log('Document has deleted', payload)
        }).catch(
        error => {
          console.error('Document has not deleted', payload, error)
        })
    }
  }
}
