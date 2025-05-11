// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Birthday Cake <br/> Delivery</h2>
        <p>Same Day and Midnight Delivery</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="/images/Classic Cheesecake.jpg" alt="Birthday Cake" />
      </div>
    </div>
  );
};

export default Hero;

