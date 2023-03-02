module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
  },
};
