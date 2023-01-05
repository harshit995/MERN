import React from 'react'
// import { a } from 'react-router-dom'
import pic from "../images/OQUN8498.JPG"

const About = () => {
  return (
    <>
      <div className="container ">
        <form action="" >
          <div className="row mt-4">
            <div className="col-md-4">
              <img src={pic} alt="pic" style={{ height: "35vh" }} />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Harshit Gupta</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'> Rating:<span>8/10</span></p>


                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active"  id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls='home' >About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls='profile'>Timeline</a>
                  </li>
                </ul>

              </div>
            </div>

            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn mt-4 " name='btnAddMore' value="Edit Profile" />
            </div>

          </div>

          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="profile-work d-flex flex-column">
                <h3>Work Link</h3>
                <a href="https://github.com/harshit995" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/harshit-gupta-152987158/" target="_blank">Linkedin</a>
                <a href="https://github.com/harshit995" target="_blank">MERN Stack Developer</a>
                <a href="https://github.com/harshit995" target="_blank">JAVA</a>
              </div>
            </div>

            {/* right side data */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab' >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Harshit Gupta</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>xyz@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>

                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role='tabpanel' aria-labelledby='profile-tab' >
                  <div className="row">
                    <div className="col-md-6">
                      <label>hiii</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Harshit Gupta</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>xyz@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>1234567890</p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </form>
      </div>

    </>
  )
}

export default About