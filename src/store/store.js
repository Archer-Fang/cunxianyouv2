import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data.js'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    data
  }
})
