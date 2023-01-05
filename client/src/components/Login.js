import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import login from "../images/login.png"
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
 <section className="container containerss">
 <div className="cont2">
        <img src={login} alt="login" />
        <NavLink to='/signup' className='login-image-link' >Create an Account</NavLink>
      </div>

      <div className="cont1">
      <h1>Login</h1>
        <form className='register-form' id='register-form'>
          <div className="mb-3">
            <label htmlFor='email' className="form-label"> Your Email</label>
            <input type="email" className="form-control" name='email' id="email" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label"> Your Password</label>
            <input type="password" className="form-control" name='password' id="password" autoComplete='off' />
          </div>
          <button type="submit" name='login' id='signup' className="btn btn-primary">Login</button>
        </form>
      </div>
      </section>
    </>
  )
}

export default Login