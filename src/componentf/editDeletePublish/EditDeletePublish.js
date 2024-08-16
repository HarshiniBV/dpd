import React, { useState } from 'react';
import './EditDeletePublish.css';

const EditDeletePublish = () => {
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
      status: 'Unpublished',
      students: [
        { name: 'Alice Johnson', role: 'Team Leader', id: 'S12345' },
        { name: 'Bob Smith', role: 'Developer', id: 'S12346' },
        { name: 'Charlie Lee', role: 'Tester', id: 'S12347' }
      ]
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
      status: 'Unpublished',
      students: [
        { name: 'Diana Prince', role: 'Designer', id: 'S22345' },
        { name: 'Ethan Hunt', role: 'Developer', id: 'S22346' }
      ]
    },
    // Add more project objects as needed
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit project with ID: ${id}`);
    // Implement edit functionality
  };

  const handleTogglePublish = (id) => {
    const project = projects.find(proj => proj.id === id);
    if (project.status === 'Unpublished') {
      if (window.confirm('Once published, you cannot edit this project. Do you wish to continue?')) {
        setProjects(
          projects.map(project =>
            project.id === id ? { ...project, status: 'Published' } : project
          )
        );
        alert('Project has been published and can no longer be edited.');
      }
    } else {
      alert('This project is already published.');
    }
  };

  return (
    <div className="edit-delete-publish-dashboard">
      <h1>My Projects</h1>
      <p>Total Projects: {projects.length}</p>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-info">
              <h2>{project.title}</h2>
              <p><strong>Abstract:</strong> {project.abstract}</p>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Requirements:</strong> {project.requirements}</p>
              <p><strong>Staff Name:</strong> {project.staffName}</p>
              <p><strong>Domain:</strong> {project.domain}</p>
              <p><strong>Department:</strong> {project.department}</p>
              <p><strong>Status:</strong> {project.status}</p>
              <p><strong>Students:</strong></p>
              <ul>
                {project.students.map(student => (
                  <li key={student.id}>
                    {student.name} - {student.role} (ID: {student.id})
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-actions">
              <button onClick={() => handleEdit(project.id)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(project.id)} className="delete-btn">Delete</button>
              <button onClick={() => handleTogglePublish(project.id)} className="publish-btn">
                {project.status === 'Published' ? 'Published' : 'Publish'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditDeletePublish;
