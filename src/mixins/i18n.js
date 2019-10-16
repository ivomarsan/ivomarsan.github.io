import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('i18n', {
      $$setLang: 'setData'
    }),

    $setLang(lang) {
      this.$i18n.locale = lang
      this.$$setLang(lang)
    }
  }
}
