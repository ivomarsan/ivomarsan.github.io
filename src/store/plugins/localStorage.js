// Import Config
import { localStorageKey } from '@/config'
// Persist Vuex state with localStorage.
import createPersistedState from 'vuex-persistedstate'

// https://www.npmjs.com/package/vuex-persistedstate
export default createPersistedState({
  key: localStorageKey,
  paths: []
})
