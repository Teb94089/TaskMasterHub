import React from 'react'
import { BrowserRouter, Routes, Route,Link, } from "react-router-dom";
import  { useRef, useEffect, useState } from 'react';

import "./ProjectManager.css";
function ProjectManager(props) {

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
      className="project-container screen-container fade-in"
      id={props.id || ""}
    >

       
        <div className="project-box">
          <div className="row">
            <div className="project-plan">

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
            <div className="project-task-box">
          <div className="project-container">
            <div className="all-task-plan">
           
            <h1>
              <u>
                  All Tasks:
              </u>
            </h1>
           
            </div>
            <div className="to-do-task-plan">
            
            <h1>
              <u>
               To do Tasks:
              </u>
            </h1>
             
             
            </div>
            <div className="progress-task-plan">
            
            <h1>
              <u>
                Progress:
              </u>
            </h1>
              
            </div>
            <div className="complete-task-plan">
            
            <h1>
              <u>
                Complete:
              </u>
            </h1>
             
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    
  
  );

}

export default ProjectManager
