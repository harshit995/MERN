import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import login from "../images/login.png"
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate()
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const loginUser= async(e)=>{
    e.preventDefault();

    const res=await fetch('/signin',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email, password
      })
    })

    const data=res.json();

    if(res.status===400 || !data){
      window.alert("Invalid Credentials...")
     
    }else{
      window.alert(" logined...")
      navigate('/')
    }

  }

  return (
    <>
 <section className="container containerss">
 <div className="cont2">
        <img src={login} alt="login" />
        <NavLink to='/signup' className='login-image-link' >Create an Account</NavLink>
      </div>

      <div className="cont1">
      <h1>Login</h1>
        <form method='POST' className='register-form' id='register-form'>
          <div className="mb-3">
            <label htmlFor='email' className="form-label"> Your Email</label>
            <input type="email" className="form-control" name='email' id="email" autoComplete='off' 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
             />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label"> Your Password</label>
            <input type="password" className="form-control" name='password' id="password" autoComplete='off' 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
             />
          </div>
          <button type="submit" name='login' id='signup' className="btn btn-primary" value="Log In" onClick={loginUser} >Login</button>
        </form>
      </div>
      </section>
    </>
  )
}

export default Login