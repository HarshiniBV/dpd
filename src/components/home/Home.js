import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaFilter } from 'react-icons/fa';

function Home() {
  return (
    <div>
         <ul className='nav justify-content-aorund shadow-lg'>
            <li className='nav-item'>
                <Link className='nav-link text-dark' to='/'>Projects</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link text-dark' to='Duplicator'>Duplicator</Link>
            </li>
        </ul>

        <div className="search-page">
      <h1>Explore</h1>
      <p>Instantly book world class audio engineers and recording studios.</p>
      <div className="search-bar-container">
        <input type="text" className="search-input" placeholder="EngineEars" value="Kendrick Lamar" />
        <button className="filter-button">
          <FaFilter />
          Filters
        </button>
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="result-container">
        <img src="/path/to/profile-pic.jpg" alt="Kendrick Lamar" className="profile-pic" />
        <div className="result-details">
          <p className="result-name">Kendrick Lamar</p>
          <p className="result-description">Artist - @kendricklamar</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home