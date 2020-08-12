import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebasConfig = {
  apiKey: 'AIzaSyBCIwEOE4_rBMebsSO2c1ahszL4IGFAqrQ',
  authDomain: 'fillgood-test.firebaseapp.com',
  databaseURL: 'https://fillgood-test.firebaseio.com',
  projectId: 'fillgood-test',
  storageBucket: 'fillgood-test.appspot.com',
  messagingSenderId: '916808603077',
  appId: '1:916808603077:web:0e5a0a110523dc6e0427ac'
}

firebase.initializeApp(firebasConfig)
const firebaseAuth = firebase.auth()
const firebaseFirestore = firebase.firestore()

export {
  firebaseAuth,
  firebaseFirestore
}
