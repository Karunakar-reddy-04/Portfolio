import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-links">
        <a href="https://github.com/Karunakar-reddy-04" className="Footer-link" target="_blank" rel="noopener noreferrer">
          <FaGithub className="Footer-icon" />
        </a>
        <a href="mailto:karunakarkalla09@gmail.com" className="Footer-link">
          <FaEnvelope className="Footer-icon" />
        </a>
        <a href="https://www.instagram.com/karunakar_kalla_04/" className="Footer-link" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="Footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/karunakar45/" className="Footer-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="Footer-icon" />
        </a>
        <a href="tel:+1 571 (436)-4229" className="Footer-link">
          <FaPhone className="Footer-icon" />
        </a>
      </div>
      <p className="Footer-text">© 2024 Karunakar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
