import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Updated branding logo to a blood drop */}
      <div className="logo" style={{ fontSize: '22px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
        🩸 Blood Donation
      </div>
      
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#find">Find Donor</a>
        <a href="#register">Register as Donor</a>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;