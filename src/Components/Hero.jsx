import React from 'react';
import '../App.css'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Be A Hero. Save A Life.</h1>
        <p className="hero-subtitle">
          Your donation can provide a new chance at life for someone in need. 
          Every drop counts. Register today and become a life-saving donor in your city.
        </p>
        <div className="hero-actions">
          <a href="#register" className="hero-btn-primary">Register as Donor</a>
          <a href="#find" className="hero-btn-secondary">Need Blood?</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;