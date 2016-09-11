/**
 * @author Juan González <juanmml93@gmail.com>  on 9/10/2016.
 */

'use strict';

var path = require('path');
module.exports = {
    devtool: 'source-map',

    entry: ['babel-polyfill', './main.development'],

    output: {
        path: __dirname,
        filename: './main.js'
    },

    node: {
        __dirname: false,
        __filename: false
    }
};