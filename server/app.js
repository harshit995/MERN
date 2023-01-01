require('dotenv').config()
const mongoose=require('mongoose');
const express=require('express');
const app=express();
const PORT=process.env.PORT
const path=require('path')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

//mongodb
const connectDb=require('./db/conn')
const User=require('./model/UserSchema')

app.use(express.json());



//we link the router files
app.use(require('./router/auth'))



//Middlewares
const middleware =(req,res,next)=>{
console.log("Hello Middleware")
 next();
}



app.get('/about',middleware,(req,res)=>{
    console.log("about page")
    res.send("Hello about form server")
})
app.get('/contact',(req,res)=>{
    res.send("Hello contact form server")
})
app.get('/signin',(req,res)=>{
    res.send("Hello signin form server")
})
app.get('/signup',(req,res)=>{
    res.send("Hello signup form server")
})

const start = async ()=>{
    try {
        await connectDb(process.env.DATABASE);
        app.listen(PORT,()=>{
            console.log(`application running on ${PORT}`);
        })
    } catch (error) {
        console.log("error")
    }
}

start();