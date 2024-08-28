import React, { useEffect } from 'react';
import './Home.css';
import profileImage from '../Images/profile-pic.png'; // Replace with your actual image path

const Home = () => {
  useEffect(() => {
    // Add the 'glow' class to the CTA button after 4 seconds (matching typewriter delay)
    const timer = setTimeout(() => {
      const button = document.querySelector('.Home-cta-button');
      if (button) {
        button.classList.add('glow');
      }
    }, 4000); // 4 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <section id="Home" className="Home-section">
      <div className="Home-content">
        <img src={profileImage} alt="Profile" className="Home-profile-image" />
        <h1 className="Home-title">Karunakar Reddy Kalla</h1>
        <p className="Home-description">
          I'm a passionate developer and tech enthusiast. Check out my Resume!
        </p>
        <a
          href="/Resume.pdf" // Path to your resume file
          className="Home-cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
