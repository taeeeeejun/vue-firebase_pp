import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/firebase-firestore'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((fu) => store.commit('setFireUser', fu))

Vue.prototype.$firebase = firebase
