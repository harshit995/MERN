const express=require("express");
const router=express.Router();
require("dotenv").config();


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
        }

        const user =new User({name,email,phone,work,password,cpassword});

        const userRegister=await user.save();

        if(userRegister){
            res.status(201).json({message:"User created Successfully"});
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
    const {email,password} =req.body;
    if(!email || !password){
        return res.status(400).json({error:"please filled the data.."})
    }

    const userLogin=await User.findOne({email:email});

    if(!userLogin){
        res.json({error:"invaild details.."})
    }else{
        res.json({message:"sigin successfully..."})
    }
    
    console.log(userLogin);
    
} catch (err) {
    console.log(err);
}
})


module.exports= router;