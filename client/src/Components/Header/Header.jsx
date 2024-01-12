import React from 'react'
import { BrowserRouter, Routes, Route,Link, } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Plans from '../../Pages/Plans/Plans';
import Pricing from '../../Pages/Pricing/Pricing';

import Features from '../../Pages/Features/Features';
import Resources from '../../Pages/Resources/Resources';


import SignUp from '../../Pages/SignUp/SignUp';
import SignIn from '../../Pages/SignIn/SignIn';
import LogIn from '../../Pages/LogIn/LogIn';
import "./Header.css";


function Header() {
  return (
    
        <div className="Header"> 
            <ul className="header"> 
            <li>
          <div className="logo-picture">
            <div className="logo-picture-background">
            <img src="../../Assets/images/basics-and-benefits-of-agile-method.jpg" alt="derffff" />
            </div>
          </div>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/plans">Plans</a>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
          
            <li>
            <button onClick={() => navigateTo('/signup')}>Sign Up</button>
          </li>
           
            <li>
            <button onClick={() => navigateTo('/signin')}>Sign In</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/login')}>Log in</button>
          </li> 
            </ul> 
        <Routes> 
                <Route exact path='/' element={< Home />}></Route> 
                <Route exact path='/features' element={< Features />}></Route> 
                <Route exact path='/pricing' element={< Pricing />}></Route> 
                <Route exact path='/plans' element={< Plans />}></Route> 
                <Route exact path='/resources' element={< Resources />}></Route> 
                
                <Route exact path='/signup' element={< SignUp />}></Route> 
                
                <Route exact path='/signin' element={< SignIn />}></Route> 
                <Route exact path='/login' element={< LogIn />}></Route> 
        </Routes> 
        </div> 
  
  );
  function navigateTo(path) {
    window.location.href = path;
  }
}



export default Header