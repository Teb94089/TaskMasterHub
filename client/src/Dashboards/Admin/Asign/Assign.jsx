import React, { useState } from "react";

import "./Assign.css";

const Assign = (props) => {
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

  const [checkedState, setCheckedState] = useState([]);

  const toppings = [
    { name: "Allow acces to time sheet" },
    { name: "Allow acces to people area" },
    { name: "Allow access to time sheet" },
    { name: "Allow acces to time sheet" },
    // Add more toppings as needed
  ];
  const tops = [
    { name: "Projects" },
    { name: "Release" },
    { name: "Iteration" },
    { name: "User story" },
    { name: "Task" },
    { name: "User" },
    { name: "Time" },
    { name: "defect" },
    // Add more toppings as needed
  ];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
                <a href="/features">Features</a>
              </li>
              <li>
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
          <div className="assign-container">
            <div className="assign-form-container">
              <h5>Assign Roles and Permissions to Users</h5>
              <form className="assign-form" onSubmit={handleSubmit}>
                <div className="form-group-assign">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group-assign">
                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="toppings-list">
                  {toppings.map(({ name, price }, index) => (
                    <div key={index}>
                      <div className="toppings-list-item">
                        <div className="left-section">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            
                            onChange={() => handleOnChange(index)}
                          />
                          <label htmlFor={`custom-checkbox-${index}`}>
                            {name}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h5>Permissions</h5>

                <div className="right-section">
                  <table className="custom-table">
                    <thead>
                      <tr>
                        <th>Entity</th>
                        <th>Add</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tops.map(({ name }, index) => (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>
                            <input
                              type="checkbox"
                              id={`add-checkbox-${index}`}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              id={`edit-checkbox-${index}`}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              id={`delete-checkbox-${index}`}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assign;
