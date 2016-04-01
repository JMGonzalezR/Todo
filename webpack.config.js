/**
 * @author Juan González <juanmml93@gmail.com>  on 4/1/2016.
 */

'use strict';
var path = require('path');
module.exports = {
    entry: './client/index.jsx', // Your appʼs entry point
    output: {
        path: __dirname + '/client',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot','babel-loader'],
                include: path.join(__dirname, 'client')
            }
        ]
    }
};