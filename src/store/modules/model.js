const initial = {
  name: '',
  count: 0
}

// Initial state
const state = {
  data: { ...initial }
}

// Getters
const getters = {
  getData(state) {
    return state.data
  }
}

// Actions
const actions = {
  setData({ commit }, data) {
    commit('SET_DATA', data)
  },

  resetData({ commit }) {
    commit('RESET_DATA')
  }
}

// Mutations
const mutations = {
  SET_DATA(state, data) {
    state.data = data
  },

  RESET_DATA(state) {
    state.data = { ...initial }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
