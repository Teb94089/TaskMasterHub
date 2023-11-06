import React, { useState, useEffect } from "react";
import Animations from "../../Components/Utilities/Animations";
import ScreenHeading from "../../Components/Utilities/ScreenHeading/ScreenHeading";
import "./Home.css";

import logoSrcE from "../../Assets/images/icons8-plan-48.png";
import logoSrcW from "../../Assets/images/icons8-track-64.png";
import logoSrcP from "../../Assets/images/icons8-risks-64.png";
import logoSrcA from "../../Assets/images/icons8-release-64.png";
import logoSrcPr from "../../Assets/images/icons8-report-50.png";

const Home = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Plan", logoSrc: logoSrcE },
    { label: "Track", logoSrc: logoSrcW },
    { label: "Release", logoSrc: logoSrcP },
    { label: "Report", logoSrc: logoSrcA },
    { label: "Projects", logoSrc: logoSrcPr },
  ];

  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 65 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "php", ratingPercentage: 65 },
    { skill: "JavaScript", ratingPercentage: 70 },
  ];

  const applicationSkillsDetails = [
    { skill: "Selenium", ratingPercentage: 90 },
    { skill: "UFT", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Online Portfolio",
      duration: { fromDate: "May", toDate: "June" },
      description: "To create an engaging and interactive showcase of my work.",
      subHeading: "Technologies Use: React, and NodeJS",
    },
    {
      title: "Mzamomtsha School Project",
      duration: { fromDate: "Feb", toDate: "May" },
      description:
        "Serves as an informational hub and communication platform for school.",
      subHeading: "Technologies Used: HTML, CSS & JavaScript.",
    },
    {
      title: "Liberty Health Orbit System Project",
      duration: { fromDate: "2021", toDate: "2023" },
      description: "Automating the system, ensuring high-quality.",
      subHeading: "Technologies Used: Selenium, and UFT",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      
        <div className="education-picture">
          <div className="education-picture-background"></div>
        </div>
     
    </div>,

    /* WORK EXPERIENCE */

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Yonglings"}
          subHeading={"Full Stack Developer"}
          fromDate={" July"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Assist in web development for front-end and back-end components.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <span className="resume-description-text"></span>
          <span className="resume-description-text"></span>
        </div>

        <ResumeHeading
          heading={"UVU Africa(CapaCiTi)"}
          subHeading={"Full Stack Developer"}
          fromDate={" Feb"}
          toDate={"July"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            -Assist in web development for front-end and back-end components.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"></span>

          <span className="resume-description-text"></span>
          <span className="resume-description-text"></span>
        </div>

        <ResumeHeading
          heading={"Liberty Limited Group"}
          subHeading={"Software Automation Tester"}
          fromDate={"2021"}
          toDate={"2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Automating the system, ensuring efficient and high-quality.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text"> </span>
          <span className="resume-description-text"> </span>
          <span className="resume-description-text"></span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Application SKILLS */
    <div
      className="resume-screen-container application-skills-container"
      key="application-skills"
    >
      {applicationSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
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
    return resumeBullets.map((bullet, index) => (
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
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <>
      <div className="home-container screen-container fade-in" id={props.id || ""} />
      <div className="home-parent">
        <div className="home-details">
          <div className="home-details-name">
            <span className="primary-text">
              {" "}
              WELCOME ON TASKMASTER HUB{" "}
              <span className="highlighted-text">
                STAY ON TRACK, ACHIEVE WITH EASE
              </span>
            </span>
          </div>
          <div className="home-details-role">
            <span className="home-role-tagline">YOUR TASK IS OUR PRIORITY</span>
          </div>
          <button
            className="btn primary-btn"
            onClick={() => navigateTo("/signin")}
          >
            Get started
          </button>
        </div>
        <div className="home-picture">
          <div className="home-picture-background"></div>
        </div>
      </div>
      <div className="resume-content">
      <div className="home-details-role">
            <span className="home-role-tagline">Organize. Prioritize. Succeed.</span>
          </div>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </>
  );
  function navigateTo(path) {
    window.location.href = path;
  }
};

export default Home;
