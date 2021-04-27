const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist'),
    },
    watch: false,
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
              {
                  test: /\.css$/i,
                  use: [
                      'style-loader',
                      'css-loader',
                  ]
              }            
        ]
    }
}