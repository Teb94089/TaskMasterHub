import React, { useState, useEffect } from "react";
import "./Plans.css";

const Plans = (props) => {
 
  return (
    <div
      className="plans-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="plans-parent">
        <div className="plans-details">
          <div className="plans-details-name">
            <span className="primary-text">
              <span className="highlighted-text"> Plans</span>
            </span>
          </div>
          <span className="plans-role-tagline">
          Focus on Tasks that Matter, We Handle the Rest.
          </span>
        </div>
        <div className="plans-box">
          <div className="column">
            <div className="free">
              <h1>
                <u>FREE PLAN</u>
              </h1>
              <ul>
                <li>Task Creation and Management</li>
                <li>Limited Task Categories</li>
                <li>Basic Reminders</li>
                <li>Single User Access</li>
                <li>Limited Storage</li>
                <li>Community Support</li>
              </ul>

             
            </div>
            <div className="standard">
              <h1>
                <u>STANDARD PLAN</u>
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
            <div className="premium">
              <h1>
                <u>PREMIUM PLAN</u>
              </h1>
              <ul>
                All Standard Plan Features:
                <li>Advanced Task Analytics </li>
                <li>Advanced Collaboration </li>
                <li>Customization and Personalization Priority</li>
                <li>Customer Support</li> 
                <li>Integration with Other Tools </li>
                <li>Enhanced Storage and Attachments</li> 
                <li>Early Access to New Features</li>
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

export default Plans;
