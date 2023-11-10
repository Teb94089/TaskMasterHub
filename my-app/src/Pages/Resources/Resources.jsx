import React, { useState, useEffect } from "react";
import "./Resources.css";

const Resources = (props) => {
 

  
  return (
    <div
      className="resources-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resources-parent">
        <div className="resources-details">
          <div className="resources-details-name">
            <span className="primary-text">
              <span className="highlighted-text">Resources</span>
            </span>
          </div>
          <span className="resources-role-tagline">
          Task Mastery for Modern Professionals.
          </span>
        </div>
        <div className="resources-box">
          <div className="row">
            <div className="free">
              <h1>
                <u>TaskMaster Hub Software Guides</u>
              </h1>
              <ul>
              Task Creation and Management:
Allow users to create and manage tasks with basic features such as task title, description, due date, and task status.
Limited Task Categories:
Provide a set number of categories or labels to help users organize their tasks, though with some limitations compared to the higher-tier plans.
Basic Reminders:
Offer basic reminder features to notify users of upcoming or overdue tasks.
Single User Access:
Limit access to a single user account, suitable for individuals or small-scale users.
Limited Storage:
Offer a certain amount of storage space for attachments or additional data associated with tasks.
Community Support:
Provide access to a community forum or knowledge base for self-help and basic support.
              </ul>

             
            </div>
            <div className="standard">
              <h1>
                <u>Customer stories</u>
              </h1>
              <ul>
                All Free Plan Features: 
                <li>Unlimited Task </li>
                <li>Categories Task</li>
                <li>Prioritization Collaborative</li>
                 <li>Task Management </li>
                 <li>Enhanced Reminders and </li>
                 <li>Notifications</li>
                  <li>Customer Support </li>
                  <li>Increased Storage Quota</li>
              </ul>

              
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

export default Resources;
