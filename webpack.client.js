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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader!isomorphic-loader"   
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', { loader: 'css-loader' }]
      }
    ]
  }
};

module.exports = config;