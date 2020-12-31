
//服务器端：require('path'),只会打包使用到的path的api内容
//浏览器端：require('path')，会将整个path的内容都打包到bundle.js中
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node', //打包的文件：服务端的文件
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
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