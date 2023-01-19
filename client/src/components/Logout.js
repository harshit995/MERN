import React ,{ useEffect, useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom';


const Logout = () => {
    const navigate=useNavigate();
    useEffect(() => {
      fetch ('/logout',{
        method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
      }).then((res)=>{
        navigate('/logout')
        if(res.status != 200){
            const error=new Error(res.error);
            throw error;
        }
      }).catch((err)=>{
        console.log(err);
      })
    }, [])
    
  return (
    <>
    <div className="home-page">
        <div className=" home-div">
        <h1>You have been logout sucessfully..</h1>

        <NavLink to='/login' className='logout' >Login Again</NavLink>
        </div>
    </div>
    </>
  )
}

export default Logout