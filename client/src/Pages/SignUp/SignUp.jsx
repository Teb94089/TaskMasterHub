import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './SignUp.css';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { firstName, lastName, email, password } = formData;

            if (!firstName || !lastName || !email || !password) {
                toast.error("Please fill all the fields.");
                return;
            }

            const response = await axios.post("http://localhost:8000/signup", {
                fname: firstName,
                lname: lastName,
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
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name:</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit">Register</button>
                                </div>
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
                    {/*<div className="sign-picture">
                        <div className="sign-picture-background"></div>
                               </div>*/}
                </div>
            </div>
        </>
    )
}

export default SignUp;
