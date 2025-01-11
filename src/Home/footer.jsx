import React from "react";
import "./footer.css"; // Make sure to create a corresponding CSS file
import img from "../assets/seth.jpg";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <img src={img} alt="Intermountain Health Logo" />{" "}
            {/* Replace with the actual logo URL */}
            <h2>DforDoctor</h2>
          </div>
          <button className="sign-in-button">
            <Link to="/HealthDoc_/signup">Sign up</Link>
          </button>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <ul>
              <h3>For Patients</h3>
              <li>Health 360 Blogs</li>
              <li>Classes and events</li>
              <li>Pay your bill</li>
              <li>Medical costs</li>
              <li>Help and support</li>
              <li>Sign in to my account</li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <h3>For Professionals</h3>
              <li>Caregiver news</li>
              <li>Transforming healthcare</li>
              <li>Research</li>
              <li>Explore careers</li>
              <li>Continuing education</li>
              <li>Physician login</li>
              <li>Employee login</li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <h3>About us</h3>
              <li>About us</li>
              <li>Who we are</li>
              <li>Leadership</li>
              <li>Diversity</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <h3>For Partners</h3>
              <li>Supply chain</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024, DforDoctor all rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Non-Discrimination</a> |{" "}
          <a href="#">Terms and Conditions</a> | <a href="#">CHNA Reports</a>
        </p>
      </div>
    </footer>
  );
};

export default footer;
