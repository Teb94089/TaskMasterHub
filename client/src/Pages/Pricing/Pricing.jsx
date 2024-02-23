import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import "./Pricing.css";

const Pricing = (props) => {
  const [name, setName] = useState("");
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    // Fetch pricing plans when the component mounts
    fetchPricingPlans();
  }, []);

  const fetchPricingPlans = () => {
    axios.get('/api/pricing') // Assuming '/api/pricing' is the endpoint in your backend
      .then(response => {
        setPricingPlans(response.data); // Set the fetched pricing plans in state
      })
      .catch(error => {
        console.error('Error fetching pricing plans:', error);
      });
  };

  
  const handleName = (e) => {
    setName(e.target.value); 
  };


  
  return (
    <div
      className="pricing-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="pricing-parent">
        <div className="pricing-details">
          <div className="pricing-details-name">
            <span className="primary-text">
              <span className="highlighted-text"> Pricing</span>
            </span>
          </div>
          <span className="Pricing-role-tagline">
          Time Managed, Goals Achieved.
          </span>
        </div>
        <div className="pricing-box">
          <div className="row">
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

              <form>
                <div className="form">
                  <label htmlFor="name">No of Members</label>
                  <input type="text" onChange={handleName} value={name} />
                  <h6>
                  Would you like to be billed
              </h6>
                  <div className="radio-button">
                    <input type="radio" value="Male" name="gender" /> Monthly
                    <input type="radio" value="Female" name="gender" /> Annually
                  
                  </div>
                  <div className="btn-submit">
                    <button onClick={() => navigateTo("/signin")}>
                      Get started
                    </button>
                  </div>
                </div>
              </form>
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

              <form>
                <div className="form">
                  <label htmlFor="name">No of Members</label>
                  <input type="text" onChange={handleName} value={name} />
                  <h6>
                  Would you like to be billed
              </h6>
                  <div className="radio-button">
                    <input type="radio" value="Male" name="gender" /> Monthly
                    <input type="radio" value="Female" name="gender" /> Annually
                  
                  </div>
                  <div className="btn-submit">
                    <button onClick={() => navigateTo("/signin")}>
                      Get started
                    </button>
                  </div>
                </div>
              </form>
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

              <form>
                <div className="form">
                  <label htmlFor="name">No of Members</label>
                  <input type="text" onChange={handleName} value={name} />
                  <h6>
                  Would you like to be billed
              </h6>
                  <div className="radio-button">
                    <input type="radio" value="Male" name="gender" /> Monthly
                    <input type="radio" value="Female" name="gender" /> Annually
                  
                  </div>
                  <div className="btn-submit">
                    <button onClick={() => navigateTo("/signin")}>
                      Get started
                    </button>
                  </div>
                </div>
              </form>
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

export default Pricing;
