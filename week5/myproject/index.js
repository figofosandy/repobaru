'use strict';

const Hapi=require('@hapi/hapi');

const Joi=require('@hapi/joi');

const server = new Hapi.server({
    port:3101,
    host:'localhost'
});

server.route([
    {
        method:'GET',
        path:'/',
        handler:(request,h)=>{
            return 'I am root route';
        }
    },
    {
        method:'GET',
        path:'/hello',
        handler:(request,h)=>{
            return{msg:'こんにちは'};
        }
    },
    {
        method:'POST',
        path:'/hellopost',
        handler:(request,h)=>{
            return{msg:'using method post'};
        }
    },
    {
        method:'POST',
        path:'/persegi',
        config:{
            validate:{
                payload:{
                    panjang:Joi.number().min(1).required(),
                    lebar:Joi.number().min(1).required()
                }
            }
        },
        handler:(request,h)=>{
            let panjangRequest=parseInt(request.payload.panjang);
            let lebarRequest=parseInt(request.payload.lebar);
            let hasil=panjangRequest*lebarRequest;
            console.log({...request.payload,hasil});
                const content={
                    info:'Luas Persegi Panjang',
                    ...request.payload,
                    hasil:hasil
                }
                const data={
                    statusCode:200,
                    error:"",
                    message:'Hitung Luas Persegi Panjang',
                    content:{...content}
                }
                return h.response(data).code(data.statusCode)
        }
    },
    {
        method:'POST',
        path:'/ganjilgenap',
        config:{
            validate:{
                payload:{
                    angka:Joi.number().required()
                }
            }
        },
        handler:(request,h)=>{
            console.log(request.payload);
                let angka=parseInt(request.payload.angka);
                let hasil;
                let template=' adalah bilangan ';
                if(angka<0) {
                    hasil=angka+template+'negatif';
                } else if(angka==0) {
                    hasil=angka+template+angka;
                } else if(angka%2==0) {
                    hasil=angka+template+'genap';
                } else if(angka%2==1) {
                    hasil=angka+template+'ganjil';
                }              
                    const data={...request.payload,hasil:hasil}
                    return h.response(data).code(200)
        }
    }
]);

const main=async()=>{
    await server.register(require('./src/routes/users'));
    await server.start();
    return server;
}

main().then(server=>{
    console.log('Server running at:',server.info.uri);
}).catch(err=>{
    console.log(err);
    process.exit(1);
})