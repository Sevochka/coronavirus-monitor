const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const isProd = process.env.NODE_ENV === 'production';

const getCSSLoader = (withModules = false) => [
    {
        loader: MiniCssExtractPlugin.loader
    },
    {
        loader: 'css-loader',
        options: {
            modules: withModules && {
                localIdentName: '[local]__[hash:base64:5]'
            }
        },
    },
    {
        loader: 'sass-loader',
        options: {
            sassOptions: {
                includePath: [srcPath]
            }
        }
    },
    {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: () => [autoprefixer()]
            }
        }
    },
];


module.exports = {
    entry: path.resolve(srcPath, 'index.tsx'),
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: ['babel-loader']
            },
            {
                test: /\.module\.s?css$/,
                use: getCSSLoader(true)
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: getCSSLoader(false)
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(srcPath, 'index.html')}),
        new ForkTsCheckerPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css'
        })

    ],
    devServer: {
        contentBase: buildPath,
        host: 'localhost',
        port: 3000,
        hot: true
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
        alias: {
            api: path.resolve(srcPath, 'api'),
            app: path.resolve(srcPath, 'app'),
            assets: path.resolve(srcPath, 'assets'),
            components: path.resolve(srcPath, 'components'),
            hocs: path.resolve(srcPath, 'hocs'),
            pages: path.resolve(srcPath, 'pages'),
            routes: path.resolve(srcPath, 'routes'),
            store: path.resolve(srcPath, 'store'),
            shared: path.resolve(srcPath, 'shared.scss'),
            interfaces: path.resolve(srcPath, 'interfaces')
        }
    },
    devtool: isProd ? 'hidden-source-map' : 'eval-source-map',
    optimization: {
        minimizer: isProd ? [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                cache: true
            })
        ] : []
    }
};
