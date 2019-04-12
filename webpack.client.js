const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  // Tell webpack the root file of our client application
  entry: './src/client/client.js',

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
      /*{
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }*/
    ]
  }
  /*,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]*/
};

module.exports = config;