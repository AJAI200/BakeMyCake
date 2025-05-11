// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>&copy; 2024 BakeMyCake</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="footer-section">
          <h4>Know Us</h4>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Need Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="footer-section footer-icons">
          <a href="https://facebook.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
