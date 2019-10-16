/**
 * Import Dependencies
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { localStorageKey, defaultLanguage } from '@/config'
import { getLocales } from '@/lib/utils'

/**
 * Install VueI18n on Vue
 */
Vue.use(VueI18n)

const storage = localStorage.getItem(localStorageKey)

const locale = storage ? JSON.parse(storage).i18n.lang : defaultLanguage

const locales = getLocales(['messages', 'dateTimeFormats', 'numberFormats'])

export default new VueI18n({
  locale,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages: locales.messages,
  dateTimeFormats: locales.dateTimeFormats,
  numberFormats: locales.numberFormats
})
