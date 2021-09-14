module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb-base', 'prettier'],
  root: true,
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'no-var': 'error',
    'import/extensions': 'never',
    'no-useless-constructor': 'off',
  },
};
