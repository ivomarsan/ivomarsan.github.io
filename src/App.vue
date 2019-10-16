<template>
  <div id="app">
    <header>
      <Logo />
      <Menu />
    </header>

    <div id="nav">
      <router-link to="/vue">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
      <router-link to="/test">Redirect</router-link>&nbsp;|
      <router-link to="/test/5">Redirect With Prop</router-link>
    </div>
    <p>{{ $t('hello') }}</p>
    <button @click="$setLang('en')">🇬🇧</button>
    <button @click="$setLang('pt-BR')">🇧🇷</button>
    <router-view />
  </div>
</template>

<script>
import { Logo, Menu } from '@/components'
import { i18n } from '@/mixins'

export default {
  mixins: [i18n],

  components: {
    Logo,
    Menu
  }

  // Dynamically add the Vuex module
  // created() {
  //   this.$store.registerModule("notifications", state);
  // }
}
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  border-bottom: 3px solid #6751eb;
}

#nav {
  padding: 30px;

  & a {
    font-weight: bold;
    color: #2c3e50;

    /* &.router-link-exact-active { */
    &.router-link-active {
      color: var(--links);
    }
  }
}
</style>
