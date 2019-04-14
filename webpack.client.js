const path = require('path');

const config = {
  // Tell webpack the root file of our client application
  entry: './src/_client.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                '@babel/env'
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        ]
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/, '')
        }
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }]
      }
    ]
  }
};

module.exports = config;