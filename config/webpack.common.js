const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const paths = require('./paths')

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [paths.src + '/index.js'],

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },

    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            filename: 'index.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/index.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/about.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/contact.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/products.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'product-detail.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/product-detail.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/news.html', // template file
        }),
        new HtmlWebpackPlugin({
            filename: 'news-detail.html',
            favicon: paths.src + '/img/favicon.png',
            template: paths.src + '/pages/news-detail.html', // template file
        }),
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {test: /\.js$/, use: ['babel-loader']},

            // Images: Copy image files to build folder
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            // Fonts and SVGs: Inline files
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
        ],
    },

    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': paths.src,
            assets: paths.public,
        },
    },
}
