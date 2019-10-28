<template>
  <div id="main-app">
    <header id="header">
      <PageLogo />
      <MainMenu />
    </header>

    <section id="content-wrap">
      <router-view />
    </section>

    <footer id="footer">
      Footer
      <button @click="$setLang('en')">🇬🇧</button>
      <button @click="$setLang('pt-BR')">🇧🇷</button>
    </footer>
  </div>
</template>

<script>
import { PageLogo, MainMenu } from '@/components'

import { i18n } from '@/mixins'

export default {
  mixins: [i18n],

  components: {
    PageLogo,
    MainMenu
  }

  // Dynamically add the Vuex module
  // created() {
  //   this.$store.registerModule("notifications", state);
  // }
}
</script>

<style lang="postcss" scoped>
@import '../styles/templates/default.css';
</style>
