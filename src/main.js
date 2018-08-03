// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

window.$ = require('jquery')
window.joint = require('jointjs')

let app
let config = {
  apiKey: 'AIzaSyDVsLk6bMpkYbgyL0g7Y2DSt9F4UCTWQ_o',
  authDomain: 'jaringan-cbc53.firebaseapp.com',
  databaseURL: 'https://jaringan-cbc53.firebaseio.com',
  projectId: 'jaringan-cbc53',
  storageBucket: 'jaringan-cbc53.appspot.com',
  messagingSenderId: '176595528663'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
