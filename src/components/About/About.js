import React from 'react';
import './About.css';

// Import skill icons from the Images folder
import javaIcon from '../Images/java.png';
import pythonIcon from '../Images/python.png';
import javascriptIcon from '../Images/js.png';
import html5Icon from '../Images/html.png';
import cssIcon from '../Images/css.png';
import reactIcon from '../Images/react.png';
import angularIcon from '../Images/angular.png';
import bootstrapIcon from '../Images/bootstrap.jpeg';
import nodeIcon from '../Images/node.png';
import npmIcon from '../Images/npm.png';
import adobeXDIcon from '../Images/adobexd.png';
import springIcon from '../Images/spring.png';
import mavenIcon from '../Images/maven.png';
import mysqlIcon from '../Images/mysql.png';
import mongodbIcon from '../Images/mongodb.png';
import eclipseIcon from '../Images/eclipse.jpg';
import vscodeIcon from '../Images/vs.png';
import gitIcon from '../Images/git.png';
import githubIcon from '../Images/github.png';

const About = () => {
  return (
    <section className="About">
      {/* Skills Section */}
      <div className="Skills-section">
        <h3>Skills</h3>
        <div className="Skills-container">
          {/* Programming Languages Card */}
          <div className="Skills-card">
            <h4>Programming Languages</h4>
            <div className="Skills-icons">
              <div className="Skill-icon"><img src={javascriptIcon} alt="JavaScript" /></div>
              <div className="Skill-icon"><img src={html5Icon} alt="HTML5" /></div>
              <div className="Skill-icon"><img src={cssIcon} alt="CSS3" /></div>
              <div className="Skill-icon"><img src={javaIcon} alt="Java" /></div>
              <div className="Skill-icon"><img src={pythonIcon} alt="Python" /></div>
            </div>
          </div>

          {/* Frameworks Card */}
          <div className="Skills-card">
            <h4>Frameworks</h4>
            <div className="Skills-icons">
              <div className="Skill-icon"><img src={reactIcon} alt="React" /></div>
              <div className="Skill-icon"><img src={angularIcon} alt="Angular" /></div>
              <div className="Skill-icon"><img src={bootstrapIcon} alt="Bootstrap" /></div>
              <div className="Skill-icon"><img src={springIcon} alt="Spring" /></div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="Skills-card">
            <h4>Tools</h4>
            <div className="Skills-icons">
              <div className="Skill-icon"><img src={nodeIcon} alt="Node.js" /></div>
              <div className="Skill-icon"><img src={npmIcon} alt="NPM" /></div>
              <div className="Skill-icon"><img src={adobeXDIcon} alt="Adobe XD" /></div>
              <div className="Skill-icon"><img src={mysqlIcon} alt="MySQL" /></div>
              <div className="Skill-icon"><img src={mongodbIcon} alt="MongoDB" /></div>
              <div className="Skill-icon"><img src={eclipseIcon} alt="Eclipse" /></div>
              <div className="Skill-icon"><img src={vscodeIcon} alt="Visual Studio Code" /></div>
              <div className="Skill-icon"><img src={gitIcon} alt="Git" /></div>
              <div className="Skill-icon"><img src={githubIcon} alt="GitHub" /></div>
              <div className="Skill-icon"><img src={mavenIcon} alt="Maven" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="Experience-section">
        <h3>Experience</h3>
        <div className="Experience-cards">
          <div className="Experience-card">
            <h4>Hoosier Community Network</h4>
            <p className="Company-address">USA</p>
            <p className="Duration">June 2024 - Present</p>
            <p className="Description">
              Worked as a Web Developer focusing on building and maintaining web applications using MERN stack Application.
            </p>
          </div>
          <div className="Experience-card">
            <h4>Shiash Info Solutions</h4>
            <p className="Company-address">Chennai, India</p>
            <p className="Duration">Jan 2022 – May 2022</p>
            <p className="Description">
              Gained experience as a Software Developer Intern, contributing to various projects and learning industry best practices.
            </p>
          </div>
          <div className="Experience-card">
            <h4>Smile Foundation</h4>
            <p className="Company-address">Hyderabad, India</p>
            <p className="Duration">Sep 2021 – Dec 2021</p>
            <p className="Description">
              Worked as a Front-end Developer on initiatives to improve user engagement and experience for non-profit projects.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="Education-section">
        <h3>Education</h3>
        <div className="Education-item">
          <h4>George Mason University</h4>
          <p>Master of Science in Computer Science</p>
          <p>2022 - 2024</p>
          <p>Fairfax, VA</p>
          <p>GPA: 3.8</p>
        </div>
        <div className="Education-item">
          <h4>Vellore Institute of Technology</h4>
          <p>Bachelor of Technology in Computer Science</p>
          <p>2018 - 2022</p>
          <p>Andhra Pradesh, India</p>
          <p>CGPA: 8.17</p>
        </div>
      </div>
    </section>
  );
};

export default About;
