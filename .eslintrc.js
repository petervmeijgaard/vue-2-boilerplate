module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  extends: 'airbnb-base',
  plugins: [
    'html',
  ],
  rules: {
    'global-require': 0,

    'no-param-reassign': 0,

    'import/no-unresolved': 0,
    'import/imports-first': 0,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  env: {
    browser: true,
    node: true
  }
};
