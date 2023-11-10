import FirebaseConfig from '../../Components/FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { auth } from 'firebase/auth';
import React, { useState } from 'react';
import './SignIn.css';
import GoogleSignIn from '../GoogleSignIn';

const SignIn = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

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
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <div className="sign-in">
        <h4>Or sign in with:</h4>
      </div>
      <div className="sign-in-options">
       <GoogleSignIn/>
        
        <button className="apple-sign-in" onClick={handleAppleSignIn}>
          Sign in with Apple
        </button>
      </div>
      </div>
      <div className="sign-picture">
        <div className="sign-picture-background"></div>
      </div>
    </div>
    </div>
      </>
   
  );
};

export default SignIn;