import React from "react";
import { useState } from "react";

import "./Assign.css";
function Assign(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
      className="assign-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="assign-box">
        <div className="row">
          <div className="assign-plan">
            <h5>Agile Plan Features:</h5>
            <ul>
              <li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <b> Create and Manage User Accounts</b>
              </li>

              <li>
                <b>Assign Roles and Permissions to Users:</b>
              </li>

              <li>
                <b> Manage User Access and Permissions</b>
              </li>

              <li>
                <b> Reporting and Analytics</b>
              </li>

              <li>
                <b> Communication and Collaboration </b>
              </li>
              <li>
                <b> Security and Compliance</b>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assign;
