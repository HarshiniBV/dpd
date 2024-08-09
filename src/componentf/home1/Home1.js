import React from 'react'
import './Home1.css'
//import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import axios from 'axios';

function Home1() {
  return (
    <div className="home-container">
    <div className="card text-bg-dark">
      <div className="background-image"></div>
      <div className="gradient-overlay"></div>
      <div className="card-img-overlay">
        <div className="search-page d-flex justify-content-center">
          <div>
            <ul>
            <li className='nav-item'>
            <Link className='nav-link text-white' to='fileUpload'>FileUpload</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='editDeletePublish'>EDitDeletePublish</Link>
          </li>
            </ul>
            <div><Outlet /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
);
}

export default Home1