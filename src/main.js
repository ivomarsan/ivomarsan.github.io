import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import i18n from './i18n'
import './registerServiceWorker'

import '@/assets/main.css'

// Disable Tips in Browser when mode is production
Vue.config.productionTip = process.env.DEBUG

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
