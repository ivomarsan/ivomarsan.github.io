// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      // preset: 'advanced' // npm install cssnano-preset-advanced --save-dev
    },
    // CSS4+ See more in https://preset-env.cssdb.org/features
    'postcss-preset-env': {
      stage: 2, // See about Stages in https://cssdb.org/#staging-process
      features: {
        'nesting-rules': true
      }
    },
    'postcss-color-mod-function': {},
    'postcss-custom-media': {}
  }
}
