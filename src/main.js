import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from '../config/firebase.js'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

Vue.prototype.$db = firebase.firestore();
Vue.prototype.$storage = firebase.storage();
Vue.prototype.$storageRef = firebase.storage().ref();

Vue.component(
  'bmv-cont',
  () => import('../src/components/bmv/cont.vue')
)
Vue.component(
  'smartcat-cont',
  () => import('../src/components/smartcat/cont.vue')
)

new Vue({
  router,
  store,
  created(){
    let vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch("STATE_CHANGE", user)
      if (user) {
        console.log(user);
      } else {
        console.log('не авторизован');
      }
    });
  },
  render: h => h(App)
}).$mount('#app')
