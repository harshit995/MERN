const mongoose = require('mongoose');

 const connectDb = async (DATABASE)=> {
  await mongoose.connect(DATABASE,{useNewUrlParser:true,useUnifiedTopology: true});
  console.log("Database is connected..")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}


module.exports =connectDb;