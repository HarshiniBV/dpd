import React, { useState, useEffect } from 'react';
import './Project.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DetailsCard1 from '../detailsCard/DeatilsCard1';

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    Type: '',
    Department: '',
    Year: ''
  });
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    const filterParams = {
      Type: params.get('Type') || '',
      Department: params.get('Department') || '',
      Year: params.get('Year') || ''
    };
    setFilters(filterParams);

    if (query) {
      setSearchQuery(query);
      searchProjects({ query });
    } else if (filterParams.Type || filterParams.Department || filterParams.Year) {
      searchProjects(filterParams);
    }
  }, [location.search]);

  async function searchProjects(queryParams) {
    try {
      const res = await axios.post('http://10.45.8.73:5000/search', queryParams, {
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
    searchProjects({ query });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    searchProjects(filters);
    window.history.replaceState(null, '', `/projects?${query}`);
  };

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
          <button className="btn btn-success shadow" type="submit">Search</button>
        </form>

        <form className="filters" onSubmit={handleSubmit}>
          <div className="dropdown m-2 pt-4">
            <select name="Type" value={filters.Type} onChange={handleChange} className="btn dropdown-button">
              <option value="">Select Type</option>
              <option value="BTech-Major">BTech-Major</option>
              <option value="MTech-Major">MTech-Major</option>
            </select>
          </div>
          <div className="dropdown m-2">
            <select name="Department" value={filters.Department} onChange={handleChange} className="btn dropdown-button">
              <option value="">Select Branch</option>
              <option value="IT">IT</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
            </select>
          </div>
          <div className="dropdown m-2">
            <select name="Year" value={filters.Year} onChange={handleChange} className="btn dropdown-button">
              <option value="">Select Year</option>
              <option value="2020">2020</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <button type="submit" className="btn btn-danger m-2">Filter</button>
        </form>

        <div className="project-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <DetailsCard1
                key={index}
                data={project.passage}
                score={Math.round(project.score * 100) / 100}
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
