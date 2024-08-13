import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsCard1 from '../../detailsCard/DetailsCard';
import Pagination from '../../Pagination/Pagination';

function FilteredProjects() {
  const location = useLocation();
  const { state } = location;
  const { filteredProjects, filters } = state;

  const [currentPage, setCurrentPage] = React.useState(1);
  const projectsPerPage = 25;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Filtered Projects</h1>
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
    </div>
  );
}

export default FilteredProjects;
