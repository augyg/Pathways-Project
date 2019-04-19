const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const IsomorphicLoaderPlugin = require("isomorphic-loader/lib/webpack-plugin");

const config = {
  // Inform webpack that we're building a bundle 
  // for nodeJS, rather than for the browser
  target: 'node',
  
  // Tell webpack the root file of our server application
  entry: './src/_server.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader!isomorphic-loader"
      },
      {
          test: /\.css$/,
          use: ['isomorphic-style-loader', { loader: 'css-loader' }]
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
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
      }
    ]
  }, 
  plugins: [
    new IsomorphicLoaderPlugin()
  ],
  externals: [webpackNodeExternals()]
};

module.exports = config;