const express=require('express')
const app=express();
const port=80;


//Middlewares

const middleware =(req,res,next)=>{
console.log("Hello Middleware")
 next();
}


app.get('/',(req,res)=>{
    res.send("Hello world form server")
})
app.get('/about',middleware,(req,res)=>{
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

app.listen(port,()=>{
    console.log("application is runing on port 80....")
})