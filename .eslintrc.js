module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
<<<<<<< HEAD
    'max-len': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
=======
    'max-len': 'off'
>>>>>>> 45f295924f1a78f7dcaf0d113b47012ce78a5428
  },
};
