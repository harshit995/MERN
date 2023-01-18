import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import signup from "../images/signup.png"
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate = useNavigate()
  const[user,setUser] =useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  let name,value;

  const handleInputs=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData =async (e)=>{
e.preventDefault();

const{name,email,work,phone,password,cpassword} =user;

const res =await fetch("/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,work,phone,password,cpassword //name:name
  })
});
   const data=await res.json();
if(res.status=== 422 || !data){
  window.alert("Invalid Registration");
  console.log("invaild....")
} else{
  window.alert("Registration Successfull")
  console.log("successfull...")
  navigate('/login')
}
  }
  

  return (
    <>
      <section className="container containerss">
      <div className="cont1">
      <h1>Signup</h1>
        <form method='POST' className='register-form' id='register-form'>
          <div className="mb-3">
            <label htmlFor='name' className="form-label"> Your Name</label>
            <input type="text" className="form-control" name='name' id="name" autoComplete='off' 
            value={user.name}
            onChange={handleInputs}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='email' className="form-label"> Your Email</label>
            <input type="email" className="form-control" name='email' id="email" autoComplete='off' 
            value={user.email}
            onChange={handleInputs}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='phone' className="form-label"> Your phone</label>
            <input type="number" className="form-control" name='phone' id="phone" autoComplete='off' 
            value={user.phone}
            onChange={handleInputs}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='work' className="form-label"> Your work</label>
            <input type="text" className="form-control" name='work' id="work" autoComplete='off' 
            value={user.work}
            onChange={handleInputs}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label"> Your Password</label>
            <input type="password" className="form-control" name='password' id="password" autoComplete='off' 
            value={user.password}
            onChange={handleInputs}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='cpassword' className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' id="cpassword" autoComplete='off' 
            value={user.cpassword}
            onChange={handleInputs}
             />
          </div>
          <button type="submit" name='signup' id='signup' className="btn btn-primary" value='register' onClick={PostData} >Register</button>
        </form>
      </div>
      <div className="cont2">
        <img src={signup} alt="signup" />
        <NavLink to='/login' className='signup-image-link' >I am already Registered</NavLink>
      </div>
      </section>
    </>
  )
}

export default Signup