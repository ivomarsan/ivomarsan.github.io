<template>
  <!-- TODO MySection -->
  <section class="my-section" :class="icon">
    <header>
      <SvgIcon :icon="icon" />
      <h1>{{ title }}</h1>
    </header>
    <div class="slot">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { SvgIcon } from '@/components'

export default {
  name: 'MySection',

  components: {
    SvgIcon
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
