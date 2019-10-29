<template>
  <div id="main-app">
    <header id="header">
      <PageLogo />
      <MainMenu />
    </header>

    <section id="content-wrap">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </section>

    <footer id="footer">
      <section class="i18n">
        <p>{{ $t('footer.i18n.translate') }}</p>
        <div class="flags">
          <a @click="$setLang('en')" :class="flagClass('en')">
            <SvgIcon icon="en" flag />
          </a>
          <a @click="$setLang('pt-BR')" :class="flagClass('pt-BR')">
            <SvgIcon icon="pt-br" flag />
          </a>
        </div>
      </section>
      <section class="contact-info">
        <a class="card" href="https://telegram.me/ivomarsan" target="_blank">
          <SvgIcon icon="chat" />
          <p>Chat</p>
        </a>
        <a class="card" href="mailto:ivomarlucio@gmail.com" target="_blank">
          <SvgIcon icon="email" />
          <p>ivomarlucio@gmail.com</p>
        </a>
        <div class="card">
          <SvgIcon icon="where" />
          <p>Surubim, PE</p>
        </div>
      </section>
      <section class="thanks">
        <p>{{ $t('footer.thanks.work') }}</p>
        <SvgIcon icon="24-7" />
        <p>{{ $t('footer.thanks.4you') }}</p>
      </section>
    </footer>
  </div>
</template>

<script>
import { PageLogo, MainMenu, SvgIcon } from '@/components'

import { i18n } from '@/mixins'

export default {
  mixins: [i18n],

  components: {
    PageLogo,
    MainMenu,
    SvgIcon
  },

  methods: {
    flagClass(lang) {
      return this.$i18n.locale === lang ? 'active' : ''
    }
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
