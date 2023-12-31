import React from 'react'
import { BrowserRouter, Routes, Route,Link, } from "react-router-dom";
import  { useRef, useEffect, useState } from 'react';

import "./AdminDash.css";
function AdminDash(props) {

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


  return (

    <div
      className="dash-container screen-container fade-in"
      id={props.id || ""}
    >

       
        <div className="dash-box">
          <div className="row">
            <div className="dash-plan">

              <h5>
                  Agile Plan Features:
              </h5>
              <ul>
                <li>
                  <b>  Create and Manage User Accounts</b>
                </li>
              
                <li>
                  <b>Assign Roles and Permissions to Users:</b>
                </li>
               
                <li>
                  <b> Manage User Access and Permissions</b>
                </li>
               
                <li>
                  <b>  Reporting and Analytics</b>
                </li>
               
                <li>
                  <b>  Communication and Collaboration </b>
                </li>
                <li>
                  <b>  Security and Compliance</b>
                </li>
              </ul>
             

            </div>
            <div className="registration-container">
            <div className="registration-form-container">
      <h2>Create User</h2>
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
     
      </div>
</div>
          </div>
        </div>
      </div>

      
  
  );
  function navigateTo(path) {
    window.location.href = path;
  }
}

export default AdminDash
