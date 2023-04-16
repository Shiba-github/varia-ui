const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        bandle: './src/entry.tsx',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './dist'),
        },
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.(tsx|ts)$/,
            },
            {
                //拡張子がpng,jpg,gif,svgを検知したら
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //[name]は画像名、[ext]は拡張子
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
