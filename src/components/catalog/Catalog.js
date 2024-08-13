import React, { useState, useEffect } from 'react';
import './Catalog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DetailsCard from '../detailsCard/DetailsCard';

function Catalog() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    Type: '',
    Department: '',
    Year: ''
  });
  const [departments, setDepartments] = useState([]);
  
  const navigate = useNavigate();

  const mtechDepartments = [
    'CE-SE', 'CE-HE', 'CE-GTE', 'EE-PE', 'EE-PS', 'ME-CC', 'ME-AMS', 'EE-ES', 'EE-VLSI', 'CSE-SE', 'CSE-CNIS', 'EIE', 'CSE'
  ];

  const btechDepartments = [
    'IT', 'CSE', 'ECE', 'ME', 'EIE', 'CE', 'EEE', 'AIML'
  ];

  useEffect(() => {
    if (filters.Type === 'MTech-Major') {
      setDepartments(mtechDepartments);
    } else if (filters.Type === 'BTech-Major') {
      setDepartments(btechDepartments);
    } else {
      setDepartments([]);
    }
  }, [filters.Type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProjects(filters);
  };

  async function searchProjects(query) {
    try {
      const res = await axios.post('http://10.45.8.73:5000/filter', { query: query }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.data);
      setFilteredProjects(Array.isArray(res.data) ? res.data : []);
      navigate('/filtered', { state: res.data });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div>
      <div className="catalog-container">
        <div className="catalog-card text-bg-dark">
          <div className="catalog-background-image"></div>
          <div className="gradient-overlay"></div>
          <div className="card-img-overlay">
            <h1 className='p1'>FILTER PROJECTS</h1>
            <p>Find, Learn, and Inspire with College Projects</p>
            <div className="container-fluid">
              <form className="filters" onSubmit={handleSubmit}>
                <div className="dropdown">
                  <select name="Type" value={filters.Type} onChange={handleChange} className="btn dropdown-button">
                    <option value="">Select Type</option>
                    <option value="BTech-Major">BTech-Major</option>
                    <option value="MTech-Major">MTech-Major</option>
                  </select>
                </div>
                {filters.Type && (
                  <div className="dropdown">
                    <select name="Department" value={filters.Department} onChange={handleChange} className="btn dropdown-button">
                      <option value="">Select Department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="dropdown">
                  <select name="Year" value={filters.Year} onChange={handleChange} className="btn dropdown-button">
                    <option value="">Select Year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-danger">Filter</button>
              </form>
              <div className="project-list">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <DetailsCard
                      key={index}
                      ProjectTitle={project.ProjectTitle}
                      Description={project.Description}
                      Year={project.Year}
                      Department={project.Department}
                    />
                  ))
                ) : (
                  <p>No projects found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
