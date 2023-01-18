import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Contact = () => {

  const[userData,setUserData]=useState({});

  const UserContact = async ()=>{
    try {
      const res= await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
  
      const data=await res.json();
      console.log(data);
      setUserData(data);
  
      if(!res.status===200){
        const error =new Error(res.error)
        throw error;
      }
  
    } catch (error) {
      console.log(error)
     
    }
  }
  
    useEffect(() => {
      UserContact();
    },[])


  return (
    <>
      <div className="contact_info ">
        <div className="container-fluid container-fluidss divs">
          <div className="row rowss">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-phone"></i>
                <div className="contact_info_content">  
                  <div className="content_info_title">
                    Phone
                  </div>
                  <div className="content_info_text">
                    +91236547890
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row rowss">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-envelope"></i> 
                             <div className="contact_info_content ">  
                  <div className="content_info_title">
                    Email
                  </div>
                  <div className="content_info_text">
                    xyz@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row rowss">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
              <i class="fa-sharp fa-solid fa-address-card"></i>
                <div className="contact_info_content">  
                  <div className="content_info_title">
                    Address
                  </div>
                  <div className="content_info_text">
                    Agra , INDIA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="contact_form">
        <div className="container containerss">
          <div className="row rowss" style={{width:"90%"}}>
            <div className="col-lg-10 offset-lg-1">
              <div className="containers py-5">
                <div className="contact_form_title" >
                  <h2> Get in touch</h2>
                </div>
                <form method='GET' id='contact_form' style={{margin:"14px 0px"}}>
            <div className="contact_form_name d-flex justify-content-between align-items-between">
            <input type="text" className="form-control " style={{margin:"0px 6px"}} name='name' id="contact_form_name" autoComplete='off ' placeholder='Enter your name'  required='true' 
            value={userData.name}
             />

            <input type="email" className="form-control "  style={{margin:"0px 6px"}} name='email' id="contact_form_email" autoComplete='off'  placeholder='Enter your Email'  required='true' 
            value={userData.email}
            // onChange={(e)=> setUserData(e.target.value)}
             />
            <input type="number" className="form-control "  style={{margin:"0px 6px"}} name='phone' id="contact_form_number" autoComplete='off'  placeholder='Enter your Phone'  required='true' 
            value={userData.phone}
             />
            </div>

              <div className="contact_form_text " style={{margin:"17px 5px"}}>
                <textarea className="text_field contact_form_message" style={{width:"100%"}} placeholder='Message' cols="30" rows="10"></textarea>
              </div>
              <div className="contact_form_button ">
              <button type="submit"  className="btn btn-primary">Send Message</button>
              </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Contact