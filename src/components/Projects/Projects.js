import React, { useState } from 'react';
import './Projects.css';

// Import your project images
import projectImage from '../Images/project-logo.png';
import githubIcon from '../Images/github.png'; // Add your GitHub icon image here

const projectsData = {
    'Software Developer': [
        {
            title: 'Multi-Agent LLM Validation Workflow',
            image: projectImage,
            description: [
                'Created a multi-agent validation workflow that reduced code review time by 30%.',
                'Integrated OpenAI GPT-4, GPT-3.5, Google Bard, and Cohere in IDEs, enhancing productivity.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        },
        {
            title: 'Real-time Chat Application',
            image: projectImage,
            description: [
                'Engineered a scalable real-time chat application using React and Node.js.',
                'Implemented WebSocket communication for instant message delivery.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        },
        {
            title: 'Smart Home Automation System',
            image: projectImage,
            description: [
                'Engineered a smart home system using IoT devices and Python.',
                'Integrated AWS IoT services for real-time data processing and remote control.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        }
    ],
    'Web Developer': [
        {
            title: 'Blood Bank Management System',
            image: projectImage,
            description: [
                'Designed and developed a comprehensive Blood Bank Management System.',
                'Leveraged React for the frontend and Node.js for backend data operations.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        },
        {
            title: 'Event Management Dashboard',
            image: projectImage,
            description: [
                'Developed an intuitive dashboard for event management.',
                'Utilized React and Node.js to streamline event scheduling and management.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        }
    ],
    'Java Developer': [
        {
            title: 'Weather Application',
            image: projectImage,
            description: [
                'Built a Weather Application to fetch and display weather information.',
                'Developed backend services using Java and Spring Boot.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        },
        {
            title: 'Online Banking System',
            image: projectImage,
            description: [
                'Developed a secure Online Banking Application with Java and Spring Boot.',
                'Integrated MySQL for reliable data storage and transaction management.'
            ],
            repoLink: 'https://github.com/Karunakar-reddy-04'
        }
    ]
};

const Projects = () => {
    const [selectedRole, setSelectedRole] = useState('Software Developer');

    return (
        <section id="Projects" className="Projects-section">

            <div className="Role-tabs">
                {Object.keys(projectsData).map(role => (
                    <button
                        key={role}
                        className={`Role-tab ${selectedRole === role ? 'active' : ''}`}
                        onClick={() => setSelectedRole(role)}
                    >
                        {role}
                    </button>
                ))}
            </div>
            <div className="Projects-container">
                {projectsData[selectedRole].map((project, index) => (
                    <div key={index} className="Project-card">
                        <img src={project.image} alt={project.title} className="Project-image" />
                        <h2 className="Project-title">{project.title}</h2>
                        <div className="Project-description">
                            {project.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                        </div>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="Project-button">
                            <img src={githubIcon} alt="GitHub" className="Github-icon" />
                            visit page
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
