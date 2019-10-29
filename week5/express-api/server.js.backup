const express=require('express')
const app=express()
const port=3000
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// import modul mongoose
const Mongoose=require('mongoose')

// connect ke belajarMongo
Mongoose.connect('mongodb://localhost/belajarMongo')

// bikin model untuk Collection Person
const PersonModel=Mongoose.model("personCol",{
    firstName:String,
    lastName:String
})

app.get('/',(req,res)=>res.send('コんばんわ'))
app.listen(port,()=>console.log(`Example app listening on port ${port}!`))
app.get('/hello',function(req,res){
    const respon={
        statusCode:200,
        error:"",
        message:"Hello"
    }
    res.json(respon)
})


app.post('/profile',function(req,res){
    console.log(req.body);
    const respon={
        statusCode:200,
        error:"",
        content:req.body
    }
    res.json(respon)
})


// bikin route
app.post('/create',async(req,res)=>{
    console.log(req.body)
    var person=new PersonModel(req.body);
    var result=await person.save();
    const respose={
        statusCode:200,
        error:"",
        message:"create Person",
        content:result
    }
    res.json(respose)
})

// route untuk find
app.get('/list',async(req,res)=>{
    var person=await PersonModel.find().exec();
    const respose={
        statusCode:200,
        error:"",
        message:"List Person",
        content:person
    }
    res.json(respose)
})