module.exports = {
  extends: ['airbnb-typescript'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react-hooks/exhaustive-deps': 0,
    'max-len': [2, { code: 140, tabWidth: 4, ignoreUrls: true }],
    'no-underscore-dangle': [2, { allow: ['_source', '_id', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  plugins: ['import', 'jsx-a11y', 'react-hooks', 'react'],
  env: {
    browser: true,
  },
};
