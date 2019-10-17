export default {
  created() {
    const escapeHandler = e => {
      if (e.keyCode === 27) {
        this.esc()
      }
    }

    document.addEventListener('keydown', escapeHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  }
}
