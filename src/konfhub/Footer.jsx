import React from 'react';
import './Footer.css';

const Footer = ({ iconUrl }) => {
  return (
    <footer className="footer">
      <img src={iconUrl} alt="Footer Icon" className="footer-icon" />
      <p>KonfHub Technologies LLP</p>
      <p>Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India</p>
      <p>Contact: reachus@konfhub.com</p>
    </footer>
  );
};

export default Footer;
