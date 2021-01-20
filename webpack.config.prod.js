const webpack = require('webpack');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]); // eslint-disable-line
  return prev;
}, {});

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
  ],
};