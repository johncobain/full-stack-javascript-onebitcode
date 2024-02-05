const path = require('path');

module.exports = {
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port:8000,
    },
    entry: {
        index: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    mode: 'production',
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test:/\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
    }
}