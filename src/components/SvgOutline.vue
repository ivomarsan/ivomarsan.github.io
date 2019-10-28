<template>
  <div
    class="svg-icon"
    :class="icon"
    v-html="require(`!!html-loader!@/assets/icons/outline-${icon}.svg`)"
  ></div>
</template>

<script>
export default {
  name: 'SvgOutline',

  props: {
    icon: {
      type: String,
      default: 'default'
    }
  }
}
</script>
