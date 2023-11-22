import React from 'react'
import  { useState } from 'react';
import Assign from '../Asign/Assign';

import './Create.css'
function Create(props) {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    employeeNo: '',
    password: '',
    department: '',
    role: '',
    email: '',
    createPassword: '',
    confirmPassword: '',

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
    className="create-container screen-container fade-in"
    id={props.id || ""}
  >

     
      <div className="create-box">
        <div className="row">
          <div className="create-plan">

            <h5>
                Agile Plan Features:
            </h5>
            <ul>
              <li>
                <b>  Create and Manage User Accounts</b>
              </li>
            
              <li>
              <a href="/assign">Assign Roles and Permissions to Users:</a>
                
              </li>
             
              <li>
              <a href="/assign">Manage User Access and Permissions</a>
              </li>
             
              <li>
                <b>  Reporting and Analytics</b>
              </li>
             
              <li>
                <b>  Communication and Collaboration </b>
              </li>
              <li>
              <a href="/security"> Security and Compliance</a>
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
        <label htmlFor="employeeNo">Employee No:</label>
        <input
          type="text"
          id="employeeNo"
          name="employeeNo"
          value={formData.employeeNo}
          onChange={handleChange} />
      </div>

<div className="form-group">
  <label htmlFor="department">Department:</label>
  <select
    id="department"
    name="department"
    value={formData.department}
    onChange={handleChange}
  >
    <option value="">Select Department</option>
    <option value="department1">IT</option>
    <option value="department2">HR</option>
    <option value="department3">Finance</option>
    {/* Add more options as needed */}
  </select>
</div>
<div className="form-group">
  <label htmlFor="role">Role:</label>
  <select
    id="role"
    name="role"
    value={formData.role}
    onChange={handleChange}
  >
    <option value="">Select Role</option>
    <option value="role1">Developer</option>
    <option value="role2">Project Manager</option>
    <option value="role3">QA Engineer</option>
    {/* Add more options as needed */}
  </select>
</div>

      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="createPassword">Create Password:</label>
        <input
          type="text"
          id="createPassword"
          name="createPassword"
          value={formData.createPassword}
          onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange} />
      </div>
      <div className="create-buttons">
      <div className="form-group">
        <button type="submit">Cancel</button>
      </div>
      <div className="form-group">
        <button type="submit">Create</button>
      </div>
      </div>
    </form>
   
    </div>
</div>
        </div>
      </div>
      </div>
 

  )
}

export default Create
