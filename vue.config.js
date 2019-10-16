module.exports = {
  css: {
    modules: true
  },

  pluginOptions: {
    // https://github.com/kazupon/vue-cli-plugin-i18n
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      localeDir: 'i18n/locales/messages',
      enableInSFC: true
    }
  },

  // Same config as Webpack DevServer
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   ca: fs.readFileSync('/path/to/ca.pem'),
    // }
    open: true,
    overlay: {
      warnings: false,
      errors: false
    }
  }

  // Overlap Webpack rules
  // configureWebpack: {
  //   ...
  // }
}
