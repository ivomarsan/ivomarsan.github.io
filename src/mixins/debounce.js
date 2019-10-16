var debounce = require('lodash.debounce')

export default {
  methods: {
    $debounce: debounce(function(fn) {
      fn()
    }, 500)
  }
}
