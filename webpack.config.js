var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/
            }
        ]
    }
};
