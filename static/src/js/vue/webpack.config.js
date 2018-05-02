const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const project = require('./project.config');

const inProject = path.resolve.bind(path, project.basePath);
const inProjectSrc = (file) => inProject(project.srcDir, file);

const __PROD__ = project.env === 'production';

const webpackConfig = {
    mode: project.env,
    entry: {
        main: [
            inProjectSrc(project.main)
        ]
    },
    module: {
        rules: []
    },
    devtool: __PROD__ ? 'source-map' : 'cheap-eval-source-map',
    resolve: {
        modules: [
            path.resolve('/'),
            'node_modules'
        ],
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_END: JSON.stringify(project.env)
            }
        })
    ],
    output: {
        filename: __PROD__ ? 'build.min.js' : 'build.js',
        path: path.resolve(project.outDir),
        publicPath: project.publicPath
    }
};

//Rules
webpackConfig.module.rules.push(
    {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    },
    {
        test: /\.vue$/,
        use: 'vue-loader',
    },
    {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
    }
);

if (__PROD__) {
    webpackConfig.plugins.push(
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    conditionals: true,
                    unused: true,
                    comparasons: true,
                    sequences: true,
                    dead_code: true,
                    if_return: true,
                    join_vars: true,
                    topLevel: true,
                    passes: 1
                },
                comments: false,
                warnings: false,
                toplevel: true,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
                mangle: true
            },
            warningsFilter: (src) => true
        })
    )
}

module.exports = webpackConfig;