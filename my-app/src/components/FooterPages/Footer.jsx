import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Section */}
      <div className="top-section">
        <div className="nav-links">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="https://aurumm.co/contact_us/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="cta-container">
          <p>
            Ready To Begin?
          </p>
          <a href="*">
            <button className="cta-button">Get a Demo</button>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Left Column */}
        <div className="footer-section">
          <img
            src="https://aurumm.co/_next/static/media/Aurum_Logo.38df8d15.png"
            alt="AURUMM Logo"
            className="footer-logo"
          />
          <p>
            World-class technical solutions for elevated jewellery store
            operations.
          </p>
        </div>

        {/* Quicklinks */}
        <div className="footer-section">
          <h6>QUICKLINKS</h6>
          <ul>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="footer-section">
          <h6>SOLUTIONS</h6>
          <ul>
            <li>
              <a href="#aupay">AU Pay</a>
            </li>
            <li>
              <a href="#ausales">AU Sales</a>
            </li>
            <li>
              <a href="#aushop">AU Shop</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h6>Contact</h6>
          <p>0422 4957575</p>
          <h6>Email</h6>
          <p>
            <a href="mailto:support@atts.in">support@atts.in</a>
          </p>
        </div>
      </div>

  

      {/* Bottom Section */}
      <div className="bottom-section">
        <p>
          Aurumm made by <span className="highlight">ATTS Technologies</span>. All
          Rights Reserved © 2024.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
