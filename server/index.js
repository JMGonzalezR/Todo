/**
 * @author Juan González <juanml93@gmail.com>  on 3/31/2016.
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port:3000});


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
                    path: 'client'
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: {
                view: 'Default'
            }
        });

});


server.start((err)=>{
    if(err){
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});


