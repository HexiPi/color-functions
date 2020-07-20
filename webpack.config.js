
var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ColorFunctions.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ColorFunctions.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ],
    }
}