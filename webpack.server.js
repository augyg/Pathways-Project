const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle 
  // for nodeJS, rather than for the browser
  target: 'node',
  
  // Tell webpack the root file of our server application
  entry: './src/server.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: 'public/media/[name].[ext]',
          publicPath: url => url.replace(/public/, ''),
          emit: false
        }
      },
      {
        test: /\.css$/,     
        use: [
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js?$/,
        //query: {compact: false},
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
              presets: [
                '@babel/react',
                '@babel/env'
              ]
            },
          }
        ]
      }
    ]
  }, 
  externals: [webpackNodeExternals()]
};

module.exports = config;