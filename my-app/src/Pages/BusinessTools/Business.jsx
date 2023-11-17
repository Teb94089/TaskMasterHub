import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import "./Business.css";

const Business = (props) => {
  return (
    <div
      className="business-container screen-container fade-in"
      id={props.id || ""}
    >
      
        <div className="business-details">
          <div className="business-details-name">
            <span className="primary-text">
              <span className="highlighted-text">Business Tools</span>
            </span>
          </div>
          <span className="business-role-tagline">
            Task Mastery for Modern Professionals.
          </span>
        </div>
        <div className="business-box">
          <div className="row">
            <div className="agile-plan">
           
            <h1>
              <u>
                  Agile Plan Features:
              </u>
            </h1>
              <ul>
                <li>
                  <b>Sprint-like Planning:</b>
                </li>
                Allow users to plan and organize tasks for a "Sprint-like"
                iteration using a planning board. Include features to estimate
                story points or time required for each task.
                <li>
                  <b>Iteration Backlog:</b>
                </li>
                Provide a dedicated area to list and manage the tasks committed
                for the current "Sprint-like" iteration.
                <li>
                  <b>Daily Update and Task Progress:</b>
                </li>
                Enable users to update task status daily, reflecting progress
                made during daily update meetings.
                <li>
                  <b>Progress Charts:</b>
                </li>
                Generate progress charts to visualize the progress of tasks in
                the iteration and help teams stay on track.
                <li>
                  <b>Iteration Review and Retrospective:</b>
                </li>
                Facilitate iteration review by allowing users to gather feedback
                and identify improvements. Provide features to conduct iteration
                retrospectives to assess team performance and processes.
                <li>
                  <b>Iteration Goal Tracking:</b>
                </li>
                Allow users to set iteration goals and track their completion
                throughout the iteration.
              </ul>
              <button
            onClick={() => navigateTo("/dashboard")}
          >
           Click here
          </button>
              
            </div>
            <div className="flow-plan">
            
            <h1>
              <u>
                Flow Plan Features:
              </u>
            </h1>
              <ul>
                <li>
                  <b>Flow Board:</b>
                </li>
                Implement a "Flow Board" with columns representing different
                stages of task completion (e.g., To Do, In Progress, Done).
                <li>
                  <b>Task Visualization:</b>
                </li>
                Enable users to visualize tasks and their progress as they move
                across the "Flow Board."
                <li>
                  <b>WIP Limits:</b>
                </li>
                Allow users to set and enforce Work In Progress (WIP) limits for
                each column to maintain workflow efficiency.
                <li>
                  <b>Task Categorization and Swimlanes:</b>
                </li>
                Allow categorization of tasks and creation of swimlanes to
                organize work based on various criteria (e.g., priority, team
                member, type of task).
                <li>
                  <b>Cycle Time Analysis:</b>
                </li>
                Provide insights into cycle times for tasks, helping teams
                optimize their workflow and identify bottlenecks.
                <li>
                  <b>Continuous Improvement:</b>
                </li>
                Encourage continuous improvement by allowing users to suggest
                and implement process changes directly from the "Flow Board."
                <li>
                  <b>Customizable Workflow:</b>
                </li>
                Offer the ability to customize the workflow stages to fit the
                specific needs of different teams and projects.
              </ul>
              <button
            onClick={() => navigateTo("/dashboard")}
          >
            Click here
          </button>
            </div>
          </div>
      </div>
    </div>
  );
  function navigateTo(path) {
    window.location.href = path;
  }
};

export default Business;
