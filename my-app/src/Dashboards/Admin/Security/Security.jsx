import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import Animations from "../../../Components/Utilities/Animations";

import logoSrcE from "../../../Assets/images/icons8-business-goal-48.png";
import logoSrcW from "../../../Assets/images/icons8-track-64.png";
import logoSrcP from "../../../Assets/images/icons8-risks-64.png";
import logoSrcA from "../../../Assets/images/icons8-release-64.png";
import logoSrcPr from "../../../Assets/images/icons8-report-50.png";


import "./Security.css";

const Security = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const securityBullets = [
        { label: "Regulatory Frameworks", logoSrc: logoSrcE },
        { label: "Risks", logoSrc: logoSrcW },
        { label: "policies", logoSrc: logoSrcP },
        { label: "Documention", logoSrc: logoSrcA },
        { label: "Standarts", logoSrc: logoSrcPr },
      ];

      const securityDetails = [
        <div className="security-screen-container" key="education">
          
            <div className="education-picture">
              <div className="education-picture-background"></div>
            </div>
         
        </div>,
    
        /* WORK EXPERIENCE */
    
        <div className="security-screen-container" key="work-experience">
           <div className="education-picture">
              <div className="education-picture-background"></div>
            </div>
        </div>,
    
        /* PROGRAMMING SKILLS */
        <div className="security-screen-container programming-skills-container">
          <div className="education-picture">
              <div className="education-picture-background"></div>
            </div>
        </div>,
    
        /* Application SKILLS */
        <div className="security-screen-container application-skills-container">
          <div className="education-picture">
              <div className="education-picture-background"></div>
            </div>
        </div>,
    
        /* PROJECTS */
        <div className="security-screen-container" key="projects">
          <div className="education-picture">
              <div className="education-picture-background"></div>
            </div>
        </div>,
      ];
    

      const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      };
    
      const getBullets = () => {
        return securityBullets.map((bullet, index) => (
          <div
            onClick={() => handleCarousal(index)}
            className={
              index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
            }
            key={index}
          >
            <img
              src={bullet.logoSrc}
              alt={`${bullet.label} icon`}
              className="bullet-logo"
            />
    
            <span className="bullet-label">{bullet.label}</span>
          </div>
        ));
      };

      const getResumeScreens = () => {
        return (
          <div
            style={carousalOffsetStyle.style}
            className="security-details-carousal"
          >
            {securityDetails.map((ResumeDetail) => ResumeDetail)}
          </div>
        );
      };
    
  return (
    <div
      className="security-container screen-container fade-in"
      id={props.id || ""}
    >
      
        <div className="security-details">
          <div className="security-details-name">
            <span className="primary-text">
              <span className="highlighted-text">Security and Compliance</span>
            </span>
          </div>
        </div>
        <div className="security-box">
          <div className="row">
            <div className="security-plan">
           
            <h1>
              <u>
              Compliance:
              </u>
            </h1>
            <div className="security-content">
        <div className="security-card">
          <div className="security-bullets">
            <div className="security-container">
              <div className="security-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="security-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
              
            </div>


            <div className="security1-plan">
            
            <h1>
              <u>
              Security:
              </u>
            </h1>
             
            
            </div>
          </div>
      </div>
    </div>
  );
  function navigateTo(path) {
    window.location.href = path;
  }
};

export default Security;
