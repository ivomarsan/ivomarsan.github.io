/**
 * Import Dependencies
 */
import Vue from 'vue'
import api from './api'
import debounce from './debounce'

/**
 * Install on Vue
 */
Vue.mixin(api)
Vue.mixin(debounce)

/**
 * Exports
 */
export { default as i18n } from './i18n'
