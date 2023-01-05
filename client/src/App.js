import React from 'react'
import "./App.css"
import {   Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
    
    <Navbar />

    <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/about" element={<About />}  />
          <Route exact path="/contact" element={<Contact />}  />
          <Route exact path="/login" element={<Login />}  />
          <Route exact path="/signup" element={<Signup />}  />
        
    </Routes>

   </>
  )
}

export default App