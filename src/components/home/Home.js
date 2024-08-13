import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import DetailsCard from '../detailsCard/DetailsCard';

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
