import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`Header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="Header-nav">
        <ul>
          <li><a href="#Home" onClick={() => onNavClick('')}>Home</a></li>
          <li><a href="#about" onClick={() => onNavClick('about')}>About</a></li>
          <li><a href="#projects" onClick={() => onNavClick('projects')}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
