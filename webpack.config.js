const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV == "development"
const config = {
    target: 'web',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.css$/,
            //     // loader: 'css-loader'
            //     use:[
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },

            {
                test: /\.(jpg|gif|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-[sha512:hash:base64:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin()
    ]
}
if (isDev) {
    config.devtool = 'cheap-module-eval-source-map'
    config.devServer = {
        port: 8080,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true,//热加载
        historyApiFallback: true //重定向到 /  H5 history
        // open : true //默认打开浏览器
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin() //减少不需要的信息展示

    )
    config.module.rules.push(
        {
            test: /\.scss$/,
            // loader: 'css-loader'
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ,
                'sass-loader'
            ]
        }
    )
}
else { //生产环境
    config.module.rules.push(
        {
            test: /\.scss$/,
            // loader: 'css-loader'
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    //'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                    ,
                    'sass-loader'
                ]
            })
        }
    )
    config.plugins.push(
        new ExtractTextPlugin('style.[contentHash:8].css'),
        new webpack.LoaderOptionsPlugin({  
            test:/\.vue$/,  
            options: {  
                vue: {  
                     loaders: {  
                        css: ExtractTextPlugin.extract({  
                        fallback:'vue-style-loader',   
                        use:'css-loader',  
                        publicPath:"../"  
                      }),  
                    }  
                }  
            }  
        })  
    )
    config.output.filename = '[name]-[chunkhash:8].js'
}

module.exports = config