import React, { useState } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import DetailsCard1 from '../detailsCard/DeatilsCard1';
import DetailsCard from '../detailsCard/DetailsCard';
function Home() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/projects?query=${encodeURIComponent(searchQuery)}`);
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
        const res = await axios.post('http://10.45.119.246:5000/filter', { query: query }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.data);
        setFilteredProjects(Array.isArray(res.data) ? res.data : []);
        navigate('/filtered',{state:res.data})

       
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
                  <Link className='nav-link text-white' to='projects'>Duplicator</Link>
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
                
                {/* <div className="filters">
                  <div className="dropdown m-2">
                    <button className="btn dropdown-button" type="button">
                      Type
                    </button>
                    <div className="dropdown-content">
                      <button className="dropdown-item" type="button">Type 1</button>
                      <button className="dropdown-item" type="button">Type 2</button>
                      <button className="dropdown-item" type="button">Type 3</button>
                    </div>
                  </div>
                  <div className="dropdown m-2">
                    <button className="btn dropdown-button" type="button">
                      Branch
                    </button>
                    <div className="dropdown-content">
                      <button className="dropdown-item" type="button">Branch 1</button>
                      <button className="dropdown-item" type="button">Branch 2</button>
                      <button className="dropdown-item" type="button">Branch 3</button>
                    </div>
                  </div>
                  <div className="dropdown m-2">
                    <button className="btn dropdown-button" type="button">
                      Year
                    </button>
                    <div className="dropdown-content">
                      <button className="dropdown-item" type="button">Year 1</button>
                      <button className="dropdown-item" type="button">Year 2</button>
                      <button className="dropdown-item" type="button">Year 3</button>
                    </div>
                  </div>
                  <div className="dropdown m-2">
                    <button className="btn dropdown-button" type="button">
                      Level
                    </button>
                    <div className="dropdown-content">
                      <button className="dropdown-item" type="button">Level 1</button>
                      <button className="dropdown-item" type="button">Level 2</button>
                      <button className="dropdown-item" type="button">Level 3</button>
                    </div>
                  </div>
                  <button type="button" className="btn btn-danger m-2" onClick={hello}>Filter</button>
                </div> */}
                 <form className="filters" onSubmit={handleSubmit}>
      <div className="dropdown m-2 pt-4">
        {/* <label>Type</label> */}
        <select name="Type" value={filters.Type} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Type</option>
          <option value="BTech-Major">BTech-Major</option>
          <option value="MTech-Major">MTech-Major</option>
          
        </select>
      </div>
      <div className="dropdown m-2">
        {/* <label>Branch</label> */}
        <select name="Department" value={filters.Branch} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Branch</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>
      </div>
      <div className="dropdown m-2">
        {/* <label>Year</label> */}
        <select name="Year" value={filters.Year} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Year</option>
          <option value="2020">2020</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      {/* <div className="dropdown m-2">
        <label>Level</label>
        <select name="level" value={filters.level} onChange={handleChange} className="btn dropdown-button">
          <option value="">Select Level</option>
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option>
        </select>
      </div> */}
      <button type="submit" className="btn btn-danger m-2">Filter</button>
    </form>
                
              </div>
              
            </div>
            {/* <div className="result-container">
            <div className="project-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project,index) => (
              <DetailsCard
               key={index}
                data={project}
               
              />
            ))
          ) : (
            <p></p>
          )}
        </div>
            </div> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;