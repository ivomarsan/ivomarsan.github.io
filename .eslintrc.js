module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/prettier',
    'plugin:prettier/recommended'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
