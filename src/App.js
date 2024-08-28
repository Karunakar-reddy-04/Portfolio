import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer'; // Import Footer component
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
    
          <Header onNavClick={handleNavClick} />
          {activeSection === '' && <Home />}
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection !== 'about' && activeSection !== 'projects' && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

export default App;
