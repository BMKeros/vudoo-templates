const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    env: NODE_ENV,
    basePath: path.resolve('src/'),
    srcDir: 'src',
    main: 'main',
    outDir: '../dist',
    publicPath: '/',
    sourceMaps: true
};