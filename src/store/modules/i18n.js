import { defaultLanguage } from '@/config'

// Initial state
const state = {
  lang: defaultLanguage
}

// Getters
const getters = {
  getData(state) {
    return state.lang
  }
}

// Actions
const actions = {
  setData({ commit }, data) {
    commit('SET_DATA', data)
  }
}

// Mutations
const mutations = {
  SET_DATA(state, data) {
    state.lang = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
