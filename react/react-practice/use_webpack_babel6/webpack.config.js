var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app/loader.jsx',
    output: { path: path.join(__dirname, 'src', 'app'), filename: 'bundle.js' },
    debug: true,
    devtool: 'eval-source-map',
    module : {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                },
            }
        ]
    },
    node: {
      fs: "empty"
    }
};
