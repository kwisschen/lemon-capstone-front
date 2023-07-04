import React from "react";
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves comfort
            foods and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Chicago</li>
                <li>Boston</li>
                <li>Seattle</li>
                <li>San Francisco</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING HOURS</h5>
              <ul>
                <li>Mon - Thur: 10:30AM - 12:00AM</li>
                <li>Fri: 12:00PM - 1:00AM</li>
                <li>Sat - Sun: 10:30AM - 12:00AM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>1213 S Wabash Ave, Chicago,</li>
                <li>IL 60506, United States</li>
                <li>Tel: +1 312-212-1113</li>
                <li>Email: tasty@littlelemon.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
