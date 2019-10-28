const state = {
  class: ''
}

const getters = {
  isOpen(state) {
    return state.class
  }
}

const actions = {
  toggle({ commit }) {
    commit('TOGGLE')
  }
}

const mutations = {
  TOGGLE(state) {
    if (state.class === 'on') {
      state.class = ''
      document.body.style.overflow = 'visible'
    } else {
      state.class = 'on'
      document.body.style.overflow = 'hidden'
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
