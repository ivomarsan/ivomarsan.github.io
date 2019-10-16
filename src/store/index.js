/**
 * Import Dependencies
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import plugins from './plugins'

/**
 * Install Vuex on Vue
 */
Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  plugins,
  modules
})
