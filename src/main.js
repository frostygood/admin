import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from '../config/firebase.js'
import firebase from 'firebase'

import jsonBmv from '/src/json/bmv.json'

Vue.use(Vuetify)

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

Vue.prototype.$db = firebase.firestore();
Vue.prototype.$storage = firebase.storage();
Vue.prototype.$storageRef = firebase.storage().ref();

// Vue.prototype.$bucket = firebase.storage().bucket();

Vue.prototype.$firebase = firebase;


Vue.prototype.$arr = []

const ComponentContext = require.context('./components/bmv/', true, /\.vue$/i);

ComponentContext.keys().forEach((componentFilePath) => { 
  let componentName = componentFilePath.split('/').pop().split('.')[0];
  Vue.component('bmv-' + componentName, () => import('../src/components/bmv/'+componentName+'.vue'))
  Vue.component('bmv-' + componentName.replace(/-./g, x=>x.toUpperCase()[1]), () => import('../src/components/bmv/'+componentName+'.vue'))
});

ComponentContext.keys().map(ComponentContext).forEach((FilePath) => { 
  let placeholders = {};
  let order = {};
  let selects = {};
  let props = {
    boolean: {},
    string: {},
    editor: {},
    imgs: {},
    links: {},
    custom: {},
    selects: {}
  };
  Object.keys(FilePath.default.props).forEach(el => {
    order[el] = FilePath.default.props[el].order;
    placeholders[el] = FilePath.default.props[el].placeholder;
    if (FilePath.default.props[el].selects) selects[el] = FilePath.default.props[el].selects;
    if (FilePath.default.props[el].type_admin == 'boolean') props.boolean[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'string') props.string[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'editor') props.editor[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'imgs') props.imgs[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'links') props.links[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'custom') props.custom[el] = FilePath.default.props[el].default
    if (FilePath.default.props[el].type_admin == 'selects') props.selects[el] = FilePath.default.props[el].default
  });
  Vue.prototype.$arr.push({
    name: FilePath.default.name,
    category: FilePath.default.category,
    preview: FilePath.default.preview,
    edit: false,
    id: 'id',
    placeholders: placeholders,
    orders: order,
    selects: selects,
    props: props,
    data: FilePath.default.props
  })
});

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
