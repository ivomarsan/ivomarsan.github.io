<template>
  <div
    v-if="flag"
    class="svg-icon"
    :class="icon"
    v-html="require(`!!html-loader!@/assets/images/flags/${icon}.svg`)"
  ></div>
  <div
    v-else
    class="svg-icon"
    :class="icon"
    v-html="require(`!!html-loader!@/assets/icons/outline-${icon}.svg`)"
  ></div>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    icon: {
      type: String,
      default: 'default'
    },
    flag: {
      type: Boolean,
      default: false
    }
  }
}
</script>
