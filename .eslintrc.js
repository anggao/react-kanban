module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'plugin:react/recommended',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },
  'plugins': ['react'],
  'rules': {
    'indent': [2, 2],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'no-unused-vars': [2, {'varsIgnorePattern': 'React'}],
    'react/display-name': [0]
  }
};
