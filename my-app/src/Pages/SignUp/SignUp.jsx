import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

import './SignUp.css';

function SignUp(props) {
    const history=useNavigate();

    const [fname,setFName]=useState('')
    const [lname,setLName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
    const handleGoogleSignIn = () => {
        // Implement Google sign-in logic here
        console.log('Signing in with Google...');
      };
    
      const handleMicrosoftSignIn = () => {
        // Implement Microsoft sign-in logic here
        console.log('Signing in with Microsoft...');
      };
    
      const handleAppleSignIn = () => {
        // Implement Apple sign-in logic here
        console.log('Signing in with Apple...');
      };


    return (
        <><div className="reg-form-container">
        <div className="registration-container">
        <div className="registration-form-container">
          <h2>Registration Form</h2>
          <div className="registration-form" >
        
                <form action="POST">
                <input type="fname" onChange={(e) => { setFName(e.target.value); } } placeholder="First Name" />
                    <input type="lname" onChange={(e) => { setLName(e.target.value); } } placeholder="Last Name" />
                    <input type="email" onChange={(e) => { setEmail(e.target.value); } } placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value); } } placeholder="Password" />
                    <input type="submit" onClick={submit} />

                </form>

                <br />
                <p>OR</p>
                <br />

                <Link to="/login">Login Page</Link>
                </div>
                <div className="sign-in">
                    </div>
                   
        <h4>Or sign in with:</h4>
      
      <div className="sign-in-options">
      <button className="google-sign-in" onClick={handleGoogleSignIn}>
                Sign in with Google
            </button>
        
        <button className="apple-sign-in" onClick={handleAppleSignIn}>
          Sign in with Apple
        </button>

        <button className="microsoft-sign-in" onClick={handleMicrosoftSignIn}>
          Sign in with Microsoft
        </button>
      </div>
           
            </div>
            <div className="sign-picture">
        <div className="sign-picture-background"></div>
      </div>
            </div>
            </div>
            </>
    )
}

export default SignUp