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
    // Scroll Window to Top with Smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })

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
