import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import DetailsCard1 from '../detailsCard/DeatilsCard1';

function Home() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setHasSearched(true);
    searchProjects({ query: searchQuery });
  };

  const [filters, setFilters] = useState({
    Type: '',
    Department: '',
    Year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    searchProjects(filters);
  };

  async function searchProjects(query) {
    try {
      const res = await axios.post('http://10.45.45.81:5000/filter', { query: query }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setFilteredProjects(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div className="home-container">
      <div className="card text-bg-dark">
        <div className="background-image"></div>
        <div className="gradient-overlay"></div>
        <div className="card-img-overlay">
          <div className="search-page d-flex justify-content-center">
            <div>
              <ul className='nav justify-content-around'>
                <li className='nav-item'>
                  <Link className='nav-link text-white' to='projects'>Projects</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-white' to='duplicator'>Duplicator</Link>
                </li>
              </ul>
              <div><Outlet /></div>
            </div>
            <h1 className='p1'>PROJECTS</h1>
            <p>Find, Learn, and Inspire with College Projects</p>
            <div className="container-fluid">
              <form className="d-flex mx-auto search-form" role="search" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-success bg-success text-white" type="submit">Search</button>
              </form>
              <div>
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
              </div>
            </div>
            <div className="result-container">
              <div className="project-list">
                {hasSearched && filteredProjects.length === 0 ? (
                  <p>No projects found</p>
                ) : (
                  filteredProjects.map((project, index) => (
                    <DetailsCard1
                      key={index}
                      data={project.passage}
                      score={Math.round(project.score * 100) / 100}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

