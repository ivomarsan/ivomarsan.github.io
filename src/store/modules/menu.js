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
  },

  close({ commit }) {
    commit('CLOSE')
  }
}

const mutations = {
  TOGGLE(state) {
    if (state.class === 'on') {
      this.commit('menu/CLOSE')
    } else {
      state.class = 'on'
      document.body.style.overflow = 'hidden'
    }
  },

  CLOSE(state) {
    state.class = ''
    document.body.style.overflow = 'visible'
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
