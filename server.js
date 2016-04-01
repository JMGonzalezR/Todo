/**
 * @author Juan González <juanml93@gmail.com>  on 3/31/2016.
 */

'use strict';

require('babel-register')({
    presets: ['es2015', 'react'],
});

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({host: 'localhost',port:3000});


server.register([{
    register:require('inert')},
    {register:require('vision')}]
    ,(err)=>{
        if(err){
            throw err;
        }

        server.views({
            engines:{
                jsx:require('hapi-react-views')
            },
            relativeTo:__dirname,
            path:'views'
        });

        server.route({
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: 'client',
                    index:['index.html']
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: {
                view: 'Index'
            }
        });

});


server.start((err)=>{
    if(err){
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});


