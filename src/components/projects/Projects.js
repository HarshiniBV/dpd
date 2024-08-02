import React, { useState } from 'react';
import DetailsCard from '../detailsCard/DetailsCard';
import './Project.css';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  async function hello(query) {
    try {
      const res = await axios.post('http://10.45.45.81:5000/search', { query: query }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.data);

  
       
      setFilteredProjects(Array.isArray(res.data) ? res.data : []);
        
       
    
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    hello(query);
  };
  console.log(filteredProjects)

  return (
    <div className="projects-container">
      <div className="container-fluid">
        <div className='box1 p-2 text-dark'>
          <h1 className="text-center">PROJECTS</h1>
          <p className="text-center">Find, Learn, and Inspire</p>
        </div>
        <hr className='hrr' />
        <form className="form d-flex justify-content-center" role="search" onSubmit={e => e.preventDefault()}>
          <input
            className="form-control me-2 shadow"
            type="search"
            placeholder="Enter Title"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-secondary shadow" type="submit">Search</button>
        </form>
        <div className="project-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <DetailsCard
              data={project.project}
              score={project.score}
              />
             
            ))
          ) : (
            <p>No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
