const Hapi = require('@hapi/hapi');
const server = Hapi.Server({
    host: 'localhost',
    port: 3000
});
const routes=require('./src/routes');
server.route(routes);
server.route({
    method:'GET',
    path:'/',
    handler:(request,h)=>{
        return 'I am root route';
    }
},)
const init=async()=>{
    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};
process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);
})
init();