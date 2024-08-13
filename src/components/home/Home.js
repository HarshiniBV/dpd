import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
// import DetailsCard1 from '../detailsCard/DeatilsCard1';
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

  const [departments, setDepartments] = useState([]);

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
    console.log(filters);
    searchProjects(filters);
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
              <div>
                <form className="filters" onSubmit={handleSubmit}>
                  <div className="dropdown m-2 pt-4">
                    <select name="Type" value={filters.Type} onChange={handleChange} className="btn dropdown-button">
                      <option value="">Select Type</option>
                      <option value="BTech-Major">BTech-Major</option>
                      <option value="MTech-Major">MTech-Major</option>
                    </select>
                  </div>
                  {filters.Type && (
                    <div className="dropdown m-2">
                      <select name="Department" value={filters.Department} onChange={handleChange} className="btn dropdown-button">
                        <option value="">Select Department</option>
                        {departments.map((dept, index) => (
                          <option key={index} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="dropdown m-2">
                    <select name="Year" value={filters.Year} onChange={handleChange} className="btn dropdown-button">
                      <option value="">Select Year</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-danger m-2">Filter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
