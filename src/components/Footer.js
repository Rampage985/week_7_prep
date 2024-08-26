// src/components/Footer.js
import React from 'react';
import '../componentsCss/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Travel Explore. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;
