import React from 'react'
import './Features.css'

const Features = (props) => {
  return (
    <><div className="features-container screen-container fade-in" id={props.id || ""} /><div className="profile-parent">
          <div className="features-details">


              <div className="features-details-name">
                  <span className="primary-text">
                      {" "}
                      {" "}
                      <span className="highlighted-text">
                          TaskMaster Hub  Software features
                      </span>
                  </span>
              </div>


              <span className="features-role-tagline">
                  Task Management Made Simple, Productivity Amplified.
              </span>
          </div>

          <div className="features-picture">
              <div className="features-picture-background"></div>
          </div>
      </div></>
  
  )
}

export default Features;
