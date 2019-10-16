<template>
  <div class="home">
    <h2>i18n: {{ $t('home') }}</h2>
    <img src="../assets/images/logo.png" height="100" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <HelloI18n />

    <code>
      Vuex Model:
      <pre>{{ model }}</pre>
    </code>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import { HelloWorld, HelloI18n } from '@/components'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    HelloI18n
  },

  computed: {
    ...mapGetters('model', {
      model: 'getData'
    })
  }
}
</script>
