import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import z from '../images/img4.jpg';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="card text-bg-dark">
        
        <img src={z} className="card-img" alt="Background" />
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
              <form className="d-flex mx-auto w-50" role="search">
                <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                <button className="btn btn-outline-success bg-success text-white" type="submit">Filter</button>
              </form>
              <div>
                <div className="filters">
                  <button type="button" className="btn btn-dark m-2">Type</button>
                  <button type="button" className="btn btn-dark m-2">Branch</button>
                  <button type="button" className="btn btn-dark m-2">Year</button>
                  <button type="button" className="btn btn-dark m-2">Level</button>
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

