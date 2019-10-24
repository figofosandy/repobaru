const Models=require('../../models/index');
const Joi=require('@hapi/joi');

let statusCode=200;
let errorCode=404;
let error="Not Found";
const todosHandler=async(request,h)=>{
    try{
        const todos=await Models.Todos.findAll({});
        if(todos.length!=0) {
            return {statusCode:statusCode,data:todos};
        } else {
            return h.response({statusCode:errorCode,error:error,message:error,}).code(errorCode);
        }
    } catch(error) {
        return h.response({error:error.message}).code(400)
    }
}

const createTodoHandler=async(request,h)=>{
    try {
        const{titleReq,descriptionReq,userIdReq,completedReq,dateActivityReq,emailReq}=request.payload;
        console.log(request.payload);
        const todo=await Models.Todos.create({
            title:titleReq,
            description:descriptionReq,
            userId:userIdReq,
            completed:completedReq,
            dateActivity:dateActivityReq,
            email:emailReq
        })
        return{
            statusCode:statusCode,
            data:todo,
            message:'New todo has been created.'
        }
    } catch (error) {
        return h.response({
            error:error.message
        })
    }
}

const updateTodoHandler=async(request,h)=>{
    try {
        const todoId=request.params.id;
        const {titleReq,descriptionReq,completedReq,emailReq}=request.payload;
        const todo=await Models.Todos.update({
            title:titleReq,
            description:descriptionReq,
            completed:completedReq,
            email:emailReq
        },{
            where:{
                id:todoId
            }
        })
        const dataRequest=request.payload;
        console.log('dataRequest');
        console.log(todo);
        return {
            statusCode:statusCode,
            data:dataRequest,
            message:`Todo with id=${todoId} has been updated`
        }
    } catch (error) {
        return h.response({
            error:error.message
        }).code(400)
    }
}

const deleteTodoHandler=async(request,h)=>{
    try {
        const todoId=request.params.id;
        await Models.Todos.destroy({
            where:{
                id:todoId
            }
        })
        return {statusCode:statusCode,message:`Todo with id=${todoId} has been updated`}
    } catch (error) {
        return h.response({
            error:error.message
        }).code(400)
    }
}
const req=Joi.required();
const template={
    titleReq:req,
    descriptionReq:req,
    completedReq:Joi.boolean().required(),
    emailReq:Joi.string().email().required()    
}

module.exports=[
    {method:'GET',path:'/todos',handler:todosHandler},
    {
        method:'POST',
        path:'/todos',
        config:{
            validate:{
                payload:{
                    ...template,
                    userIdReq:Joi.number().required(),
                    dateActivityReq:Joi.date().required()
                }
            }
        },
        handler:createTodoHandler
    },
    {
        method:'PUT',
        path:'/todos/{id}',
        config:{
            validate:{
                payload:{
                    ...template
                }
            }
        },
        handler:updateTodoHandler
    },
    {method:'DELETE',path:'/todos/{id}',handler:deleteTodoHandler}
]