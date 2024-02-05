import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './SignUp.css';

function SignUp() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (!fname || !lname || !email || !password) {
                toast.error("Please fill all the fields.");
                return;
            }

            const response = await axios.post("http://localhost:8000/signup", {
                fname,
                lname,
                email,
                password
            });

            if (response.data === "exist") {
                toast.error("User already exists");
            } else if (response.data === "notexist") {
                toast.success("Successfully registered. Please go to the login page");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        }
    }

    const handleGoogleSignIn = () => {
        console.log('Signing in with Google...');
    };
    
    const handleMicrosoftSignIn = () => {
        console.log('Signing in with Microsoft...');
    };
    
    const handleAppleSignIn = () => {
        console.log('Signing in with Apple...');
    };

    return (
        <>
            <ToastContainer />
            <div className="reg-form-container">
                <div className="registration-container">
                    <div className="registration-form-container">
                        <h2>Registration Form</h2>
                        <div className="registration-form">
                        <form onSubmit={handleSubmit}>

                                <input type="text" value={fname} onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                                <input type="text" value={lname} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <button type="submit">Submit</button>
                            </form>
                            <br />
                            <p>OR</p>
                            <br />
                            <Link to="/projectmanager">Project Manager</Link>
                        </div>
                        <div className="sign-in">
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
                    </div>
                    <div className="sign-picture">
                        <div className="sign-picture-background"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
