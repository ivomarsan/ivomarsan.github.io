<template>
  <nav id="main-menu">
    <div class="menu" :class="isOpen" @click="toggle()">
      <span class="hamburguer" :class="isOpen"></span>
    </div>

    <ul :class="isOpen">
      <li>
        <router-link to="/home">{{ $t('menu.home') }}</router-link>
      </li>
      <li>
        <router-link to="/about">{{ $t('menu.about') }}</router-link>
      </li>
      <!-- <li>
        <router-link to="/test/5">Redirect</router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { esc } from '@/mixins'

export default {
  name: 'MainMenu',

  mixins: [esc],

  watch: {
    $route() {
      // Scroll Window to Top with Smooth animation
      window.scrollTo({ top: 0, behavior: 'smooth' })

      this.close()
    }
  },

  computed: {
    ...mapGetters('menu', {
      isOpen: 'isOpen'
    })
  },

  methods: {
    ...mapActions('menu', {
      toggle: 'toggle',
      close: 'close'
    }),

    esc() {
      this.toggle()
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/components/main-menu.css';
</style>
