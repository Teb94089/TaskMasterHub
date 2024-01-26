import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link, Route, Routes } from "react-router-dom"
import Business from "../BusinessTools/Business"
import "./logIn.css"

const LogIn = () => {
  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/business",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
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


  return (
    <div className="log-container">
    <div className="container">
    <div className="login">

<h1>Login</h1>

<form action="POST">
    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
    <input type="submit" onClick={submit} />

</form>

<br />
<p>OR</p>
<br />

<Link to="/business">Business Tools</Link>

</div>
    </div>
    </div>
  );
};

export default LogIn;