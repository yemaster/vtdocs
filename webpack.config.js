var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var glob = require('glob');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function getEntries(globPath) {
    const entries = glob.sync(globPath).reduce((result, entry) => {
        const moduleName = path.basename(path.dirname(entry)) // 获取模块名称
        result[moduleName] = entry
        return result
    }, {})
    return entries
}
const entries = getEntries('./src/js/**/*.js')

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: "./dist/",
        historyApiFallback: true,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/dist/index.html',
            inject: 'head',
            template: 'html-withimg-loader!' + __dirname + "/src/index.html",
            chunks: ['about'],
            inlineSource: '.(js|css)$'
        }),
        new TransferWebpackPlugin([
            { from: 'docs', to: 'docs' }
        ], path.resolve(__dirname, "src")),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            {
                test: /\.(md|png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            }]
    }
};