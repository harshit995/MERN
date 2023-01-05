import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Contact = () => {
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
              <i class="fa-solid fa-phone"></i>
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
              <i class="fa-solid fa-phone"></i>
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
                <form action=" " id='contact_form' style={{margin:"14px 0px"}}>
            <div className="contact_form_name d-flex justify-content-between align-items-between">
            <input type="text" className="form-control " style={{margin:"0px 6px"}} name='name' id="contact_form_name" autoComplete='off' placeholder='Enter your name'  required='true' />

            <input type="email" className="form-control "  style={{margin:"0px 6px"}} name='email' id="contact_form_email" autoComplete='off' placeholder='Enter your Email'  required='true' />
            <input type="number" className="form-control "  style={{margin:"0px 6px"}} name='phone' id="contact_form_number" autoComplete='off' placeholder='Enter your Phone'  required='true' />
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