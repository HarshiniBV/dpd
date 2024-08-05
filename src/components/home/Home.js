import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import DetailsCard1 from '../detailsCard/DeatilsCard1';
import Filters from '../filters/Filters'; // Import the Filters component

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
    async function searchProjects(query) {
      console.log(query)
      try {
        const res = await axios.post('http://10.45.45.81:5000/filter', { query: query }, {
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
    console.log(filters)
    // Call your filter function here
    searchProjects(filters)
  };
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
                <Filters filters={filters} handleChange={handleChange} handleSubmit={handleSubmit} />
              </div>
            </div>
            <div className="result-container">
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
            <p></p>
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
