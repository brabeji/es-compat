module.exports = {
  root: true,
  plugins: ['es-compat'],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    'es-compat/compat': 'error',
  },
};
