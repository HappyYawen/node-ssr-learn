const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    // devtool: 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_mudules/,
            options: {
                presets: ['react', 'stage-0', ['env', {
                    targets: {
                        browsers: ['last 2 versions'] //兼容主流浏览器最后两个版本
                    }
                }]]
            }
        }]
    }
}