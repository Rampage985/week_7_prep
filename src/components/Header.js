// src/components/Header.js
import React from 'react';
import '../componentsCss/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
      <h1>Travel Explore</h1>
      
          <li><a href="/">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
