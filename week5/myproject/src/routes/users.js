'use strict';

const Joi=require('@hapi/joi');

exports.plugin={
    pkg:require('../../package.json'),
    name:'rout-books',
    register:async(server,options,next)=>{
        const basePath='/api/v1/';
        server.route([
            {
                path: basePath+'users',
                method: 'GET',
                handler: (request, h) => {
                    const data={data:'hello from users'}
                    return h.response(data).code(200);
                }
            },
            {
                method:'GET',
                path:basePath+'users/{id}',
                options:{
                    validate:{
                        params:{
                            id:Joi.number().required().min(1)
                        },
                        query:{
                            page:Joi.number().min(0).default(1)
                        }
                    }
                },
                handler:(request,h)=>{
                    return 'Hello from user '+request.params.id+' Parameter Page = '+request.query.page;
                }
            }
        ]);
    }
}