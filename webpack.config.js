const path = require('path');

module.exports = {
    entry: './js/main.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
            },
        ]
    },devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
}