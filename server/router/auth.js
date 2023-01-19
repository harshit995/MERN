const jwt =require('jsonwebtoken')
const express=require("express");
const router=express.Router();
require("dotenv").config();
const bcrypt=require('bcryptjs')
const Authenticate=require("../middleware/authenticate")

const User=require("../model/UserSchema")
const connectDb=require("../db/conn");


const start = async()=>{
    try {
        await connectDb(process.env.DATABASE)
        console.log("i am connected...")
    } catch (error) {
        console.log("ERROR..")
    }
    }
start();



router.get('/',(req,res)=>{
    res.send("Hello world form server")
})



router.post('/register',async (req,res)=>{

    //ECMA-SCRIPT
    const { name,email,phone,work,password,cpassword } = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"fill all the fields..."})
    }


    
    // For uniqueness

    // using Promises
    
    // User.findOne({email:email})
    // .then((userExist)=>{
    //     if(userExist){
    //         return res.status(422).json({error :" User already Exist"});
    //     }

    //     const user =new User({name,email,phone,work,password,cpassword});
    //     user.save().then(()=>{
    //         res.status(201).json({message:"User created Successfully"});
    //     }).catch((err)=> res.status(500).json({error:"failed..."}));
    // }).catch(err => {console.log(err);})

    // USING ASYNC/AWAIT

    try {
        const userExist= await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error :" User already Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"password are not matching.."})
        }else{

            const user =new User({name,email,phone,work,password,cpassword}); //name:name , email:email
    
            // call hasing passwords bcrypt middleware here
            
            const userRegister=await user.save();
    
            if(userRegister){
                res.status(201).json({message:"User created Successfully"});
            }
        }

    } catch (error) {
        console.log(err);    
    }
    
    
    //to Get data
    // console.log(name);
    // console.log(email);
    // res.json({message:req.body})
    // console.log("REGISTRATION PAGE...")

})

//login route
router.post('/signin',async (req,res)=>{
try {
    let token;
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(400).json({error:"please filled the data.."})
    }

    const userLogin=await User.findOne({email:email});

    if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        if(!isMatch){
            res.status(400).json({error:"invaild details.."})
        }else{
        //to generate JWT TOKEN 
        token =  await userLogin.generateAuthToken(); 
        console.log(token)

        res.cookie("jwtoken",token ,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        })

        res.status(200).json({message:"user Signin successfully..."})
    }
    
    }else{
        return res.status(400).json({error:"invaild details.."})
    }
   
    // console.log(userLogin);
    
} catch (err) {
    console.log(err);
}
})


//about page middleware

router.get('/about',Authenticate,(req,res)=>{
    // console.log("about page")
    res.send(req.rootUser);
})

router.get('/getdata',Authenticate,(req,res)=>{
    // console.log("about page")
    res.send(req.rootUser);
})

router.post('/contact',Authenticate, async (req,res)=>{
try {
    
    const{ name, email, phone, message }=req.body;
 console.log(req.body)
    if( !name || !email || !phone || !message){
        console.log("error in formm...")
        return res.json({error:"please fill the form"});
    }

    const userContact=await User.findOne({_id:req.userID});

    if(userContact){
        const userMessage=await userContact.addMessages(name,email,phone,message);

        await userContact.save();

        res.status(201).json({message:"User contacted Successfully...."})

    }

} catch (error) {
    console.log(error)
}
})

module.exports= router;