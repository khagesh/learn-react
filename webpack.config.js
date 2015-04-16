/**
 * Created by Khagesh.Sharma on 4/11/2015.
 */
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/dist',
    entry: {
        app: './Home/index.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    externals: {
        'react': 'React'
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    }
};