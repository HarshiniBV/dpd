import React, { useState, useEffect } from 'react';
import './Catalog.css';
// import axios from 'axios';
import DetailsCard1 from '../detailsCard/DeatilsCard1';
import Pagination from '../Pagination/Pagination';

function Catalog() {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    Type: '',
    Department: '',
    Year: ''
  });
  const [departments, setDepartments] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(25);

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
    setSearchPerformed(true);
    setCurrentPage(1);
    searchProjects(filters);
  };

  // Mock the searchProjects function
  async function searchProjects(query) {
    const mockData = [
      { id: 1, title: "Project 1", type: "BTech-Major", department: "CSE", year: "2023" },
      { id: 2, title: "Project 2", type: "MTech-Major", department: "CE-SE", year: "2022" },
      // Add more mock projects here as needed
    ];
    // Filter the mock data based on the query
    const filtered = mockData.filter(project => {
      return (
        (!query.Type || project.type === query.Type) &&
        (!query.Department || project.department === query.Department) &&
        (!query.Year || project.year === query.Year)
      );
    });
    setFilteredProjects(filtered);
  }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="catalog-container">
        <div className="catalog-card text-bg-dark">
          <div className="catalog-background-image"></div>
          <div className="gradient-overlay"></div>
          <div className="card-img-overlay">
            <h1 className='p1'>CATALOG PROJECTS</h1>
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
              {searchPerformed && (
                <div className="selected-filters">
                  <h5>Selected Filters:</h5>
                  <ul>
                    {filters.Type && <li>Type: {filters.Type}</li>}
                    {filters.Department && <li>Department: {filters.Department}</li>}
                    {filters.Year && <li>Year: {filters.Year}</li>}
                  </ul>
                </div>
              )}
              {searchPerformed && filteredProjects.length === 0 ? (
                <div className="no-projects">The Data Will Update Soon</div>
              ) : (
                searchPerformed && (
                  <>
                    <Pagination
                      projectsPerPage={projectsPerPage}
                      totalProjects={filteredProjects.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                    <div className="project-list">
                      {currentProjects.map((project, index) => (
                        <DetailsCard1
                          key={index}
                          data={project}
                        />
                      ))}
                    </div>
                    <Pagination
                      projectsPerPage={projectsPerPage}
                      totalProjects={filteredProjects.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
