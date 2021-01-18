import Vue from 'vue'
import Vuex from 'vuex'
import userModul from './store/user'
import generalModul from './store/general'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    userModul,
    generalModul
  }
})
