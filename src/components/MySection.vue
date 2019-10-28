<template>
  <!-- TODO MySection -->
  <section class="my-section" :class="icon">
    <header>
      <SvgOutline :icon="icon" />
      <h1>{{ title }}</h1>
    </header>
    <div class="slot">
      <slot></slot>
    </div>
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
  }
}
</script>

<style lang="postcss" scoped>
@import '../styles/components/my-section.css';
</style>
