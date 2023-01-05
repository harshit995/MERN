import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import signup from "../images/signup.png"
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <section className="container">
      <div className="cont1">
      <h1>Signup</h1>
        <form className='register-form' id='register-form'>
          <div className="mb-3">
            <label htmlFor='name' className="form-label"> Your Name</label>
            <input type="text" className="form-control" name='name' id="name" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='email' className="form-label"> Your Email</label>
            <input type="email" className="form-control" name='email' id="email" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='phone' className="form-label"> Your phone</label>
            <input type="number" className="form-control" name='phone' id="phone" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='work' className="form-label"> Your work</label>
            <input type="text" className="form-control" name='work' id="work" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label"> Your Password</label>
            <input type="password" className="form-control" name='password' id="password" autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor='cpassword' className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cpassword' id="cpassword" autoComplete='off' />
          </div>
          <button type="submit" name='signup' id='signup' className="btn btn-primary">Submit</button>
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