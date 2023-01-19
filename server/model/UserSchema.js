const jwt =require('jsonwebtoken')
const mongoose=require('mongoose')
const bcrypt =require('bcryptjs');
require('dotenv').config()

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phone:{
                type:Number,
                required:true
            },
            message:{
                type:String,
                required:true
            }   
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


//for hashing

userSchema.pre('save', async function(next){
    if(this.isModified('password')) { //if there is a password field and user modified it then it should hash
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword =await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

//we are generating token

userSchema.methods.generateAuthToken = async function(){
    try {
    const token= jwt.sign({_id:this._id },process.env.SECRET_KEY)        
    this.tokens =this.tokens.concat({token: token})
    await this.save();
    return token;
    } catch (error) {
        console.log(error)
    }
}

// stored the message
userSchema.methods.addMessages = async function(name,email,phone,message){
    try {
        this.messages= this.messages.concat({name,email,phone,message})
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error)
    }
}

const User =mongoose.model('USER',userSchema)

module.exports=User;