const Hapi = require('@hapi/hapi');

const server = Hapi.server({ port: 3102,host:'localhost'});

const routes=require('./routes');
server.route(routes);

const init=async()=>{
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}