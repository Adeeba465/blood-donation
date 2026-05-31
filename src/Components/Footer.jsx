import React from 'react';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">🩸 Blood Donation</span>
          <p className="footer-tagline">Connecting life-savers across cities. Every single drop matters.</p>
        </div>
        
        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#find">Find Donors</a></li>
            <li><a href="#register">Become a Donor</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Blood Donation Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;