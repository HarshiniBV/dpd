import React, { useState } from 'react';
import './studentview.css';

const FacultyProjectDetails = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'AI-Based Traffic Management System',
      abstract: 'An AI-driven system to manage traffic flow in urban areas.',
      description: 'This project aims to leverage artificial intelligence to improve traffic management in urban areas, reducing congestion and enhancing safety.',
      requirements: 'Python, TensorFlow, IoT sensors',
      staffName: 'Dr. John Doe',
      domain: 'Artificial Intelligence',
      department: 'Computer Science',
      status: 'Published'
    },
    {
      id: 2,
      title: 'Blockchain-Based Voting System',
      abstract: 'A secure voting system utilizing blockchain technology.',
      description: 'The project focuses on creating a secure, transparent voting system using blockchain technology to prevent fraud and ensure trust.',
      requirements: 'Ethereum, Solidity, Web3.js',
      staffName: 'Prof. Jane Smith',
      domain: 'Blockchain',
      department: 'Information Technology',
      status: 'Unpublished'
    },
    // Add more project objects as needed
  ]);

  const handleInterest = (id) => {
    alert(`You are interested in project ID: ${id}`);
    // Implement the "I am interested" functionality
  };

  return (
    <div className="faculty-project-details">
      <h1>LIsted projects for the year 2024-2025</h1>
      <p>Total Projects: {projects.length}</p>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h2>{project.title}</h2>
              <p><strong>Abstract:</strong> {project.abstract}</p>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Requirements:</strong> {project.requirements}</p>
              <p><strong>Faculty Name:</strong> {project.staffName}</p>
              <p><strong>Domain:</strong> {project.domain}</p>
              <p><strong>Department:</strong> {project.department}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </div>
            <div className="project-actions">
              <button onClick={() => handleInterest(project.id)} className="interest-btn">I am Interested</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyProjectDetails;
