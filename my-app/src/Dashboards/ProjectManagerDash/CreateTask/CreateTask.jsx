import React from 'react'
import { BrowserRouter, Routes, Route,Link, } from "react-router-dom";
import  { useRef, useEffect, useState } from 'react';

import "./CreateTask.css";
function CreateTask(props) {

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
      className="create-task-container screen-container fade-in"
      id={props.id || ""}
    >

       
        <div className="create-task-box">
          <div className="row">
            <div className="create-task-plan">

              <h5>
                  Agile Plan Features:
              </h5>
              <ul>
                <li>
                  <b> Task Assignment and Delegation</b>
                </li>
              
                <li>
                  <b>  Planning:</b>
                </li>
               
                <li>
                  <b> Timeline</b>
                </li>
                <li>
                  <b> Task</b>
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

                <li>
                  <b>  Project Setting</b>
                </li>
              </ul>
             

            </div>
            <div className="create-task-container">
            <div className="create-task-form-container">
      <h2>Create User</h2>
      <form className="create-task-form" onSubmit={handleSubmit}>
        <div className="create-task-form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} />
        </div>
        <div className="create-task-form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} />
        </div>
        <div className="create-task-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange} />
        </div>
        <div className="create-task-form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange} />
        </div>
        <div className="create-task-form-group">
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

export default CreateTask
