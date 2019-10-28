<template>
  <!-- TODO MySection -->
  <section class="my-section">
    <SvgOutline :icon="icon" />
    <h1>{{ title }}</h1>
  </section>
</template>

<script>
import { SvgOutline } from '@/components'

export default {
  name: 'MySection',

  components: {
    SvgOutline
  },

  props: {
    icon: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: 'Title'
    }
  },

  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/components/my-section.css';
</style>
