<template>
  <div class="home">
    <!-- TODO -->
    <MySection icon="chat" title="chat"></MySection>
    <MySection icon="default" title="default"></MySection>
    <MySection icon="education" title="education"></MySection>
    <MySection icon="logos" title="logos"></MySection>
    <MySection icon="projects" title="projects"></MySection>
    <MySection icon="softwares" title="softwares"></MySection>
    <MySection icon="where" title="where"></MySection>

    <code>
      Vuex Model:
      <pre>{{ model }}</pre>
    </code>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import { MySection } from '@/components'

export default {
  name: 'Home',

  components: {
    MySection
  },

  computed: {
    ...mapGetters('model', {
      model: 'getData'
    })
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/pages/home.css';
</style>
