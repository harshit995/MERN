import React from 'react'
import { BrowserRouter ,  Route ,Routes } from 'react-router-dom';
import Home from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
    
    <Navbar />

    <Route exact path='/'>
    <Home />
    </Route>

    <Route path='/contact'>
    <Contact />
    </Route>

    <Route path='/about'>
    <About />
    </Route>

    <Route path='/login'>
    <Login />
    </Route>

    <Route path='/signup'>
    <Signup />
    </Route>

   </>
  )
}

export default App