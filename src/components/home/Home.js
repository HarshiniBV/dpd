import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/projects?query=${encodeURIComponent(searchQuery)}`);
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
              <div><Outlet/></div>
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
                <div className="filters">
                  <button type="button" className="btn btn-light m-2">Type</button>
                  <button type="button" className="btn btn-light m-2">Branch</button>
                  <button type="button" className="btn btn-light m-2">Year</button>
                  <button type="button" className="btn btn-light m-2">Level</button>
                  <button type="button" className="btn btn-danger m-2">Filter</button>
                </div>
              </div>
            </div>
            <div className="result-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



