/**
 * Import Dependencies
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * Application Routes
 */
import routes from './routes'

/**
 * Install Vue Router on Vue
 */
Vue.use(Router)

/**
 * Create and Export Vue Router
 */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
