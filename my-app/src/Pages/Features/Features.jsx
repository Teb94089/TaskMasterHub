import './Features.css';
 import React, { useState, useEffect } from 'react';

const Features = (props) => {
  const [selectedPlan, setSelectedPlan] = useState("Agile"); // Default to "Agile"

  const getAgileContent = () => (
    <>
      <div className="agile-details">
        <h1>Agile Plan Features:</h1>
        <p>
          Project Title: Admins can set the name or title of the project.
          Project Description: A field for adding a detailed description of the project.
          Start and End Dates: Define the project's start and end dates.
          Project Categories: Assign the project to specific categories or departments.
          Milestones: Set project milestones and goals.
          Project Templates: If you have predefined project templates, you can choose one for your project.
        </p>
      </div>
      <div className="agile-picture">
        <div className="agile-picture-background"></div>
      </div>
    </>
  );

  const getFlowContent = () => (
    <>
    <div className='flow-content'>
     <div className="flow-picture">
        <div className="flow-picture-background"></div>
      </div>
      <div className="flow-details">
        
        <h1>Flow Plan Features:</h1>
        <p>
          Project Title: Admins can set the name or title of the project.
          Project Description: A field for adding a detailed description of the project.
          Start and End Dates: Define the project's start and end dates.
          Project Categories: Assign the project to specific categories or departments.
          Milestones: Set project milestones and goals.
          Project Templates: If you have predefined project templates, you can choose one for your project.
        </p>
      </div>
      </div>
    </>
  );
  useEffect(() => {
    // If you want to navigate somewhere when the component loads, do it here
    // For example, you can use the navigateTo function here
    navigateTo(selectedPlan);
  }, [selectedPlan]);

  const navigateTo = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="features-container screen-container fade-in" id={props.id || ""}>
    <div className="features-parent">
      <div className="features-details">
        <div className="features-details-name">
          <span className="primary-text">
            <span className="highlighted-text">TaskMaster Hub Software features</span>
          </span>
        </div>
        <span className="features-role-tagline">Effortless Task Management, Seamless Productivity.</span>
        <div className="features-picture">
            <div className="features-picture-background"></div>
          </div>
      
      </div>

      <div className="features-options">
        <div className="buttons-container">
          <button onClick={() => navigateTo("Agile")}>Agile</button>
          <button onClick={() => navigateTo("Flow")}>Flow</button>
        </div>

        <div className="content-container">
          <div className="selected-plan-content">
            {selectedPlan === "Agile" ? getAgileContent() : null}
            {selectedPlan === "Flow" ? getFlowContent() : null}
          </div>
         
        </div>
      </div>
    </div>
  </div>
);
};

export default Features;