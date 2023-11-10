import React from "react";
import logo from "../../Assets/images/Project-management-tools-and-process.jpg";

import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer">
     {/* <div className="newsletter">
      <div className="title">
        <h3>
          <span>Subscribe</span> Newsletter
        </h3>
        <p>
        Be the first to know of any specials, launches, rewards and more.
        </p>
      </div>
      <div className="news-container">
        <input type="text" placeholder="email@example.com" />
        <button>Subscribe</button>
      </div>
    </div>
  */}
       <div className='upper-footer'>
        <div className="brand-container">
        <div className="brand-picture-background">
        </div>
          <p>
          YOUR TASK IS OUR PRIORITY
          </p>
         
        </div>
        <div className="about-container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
          Discover curated newsletters tailored to your interests. Stay informed and inspired with our handpicked content.
          
          </p>
        </div>
        <div className="contact-container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+27 213123129</p>
          <p>n&htechnologies@gmail.com</p>
          <p>@N&H Technologies</p>
          <p>412 Street, Ground Floor, South Africa</p>
        </div>
      </div>
      <div className="lower_footer">
        <h6>
          Privacy  Terms and Condition   Copyright &copy; 2023 <span>N&H Technologies</span>
        </h6>
      </div>
    </div>
  );
}
export default Footer;
