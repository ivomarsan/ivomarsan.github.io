// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      // preset: 'advanced' // npm install cssnano-preset-advanced --save-dev
    },
    'postcss-preset-env': {
      stage: 2, // See about Stages in https://cssdb.org/#staging-process
      features: {
        'nesting-rules': true
      }
    },
    'postcss-color-function': {
      preserveCustomProps: true
    }
  }
}
