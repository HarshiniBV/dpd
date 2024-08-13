import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];
  const [pageStart, setPageStart] = useState(1);

  const pagesToShow = 10;

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageSummary = () => {
    const start = (currentPage - 1) * projectsPerPage + 1;
    const end = Math.min(currentPage * projectsPerPage, totalProjects);
    return `${start}-${end} / ${totalProjects}`;
  };

  const handlePrev = () => {
    setPageStart(Math.max(1, pageStart - pagesToShow));
  };

  const handleNext = () => {
    setPageStart(Math.min(pageNumbers.length - pagesToShow + 1, pageStart + pagesToShow));
  };

  const visiblePageNumbers = pageNumbers.slice(pageStart - 1, pageStart - 1 + pagesToShow);

  return (
    <nav className="pagination-container">
      <div className="pagination-wrapper">
        <button
          className="pagination-arrow"
          onClick={handlePrev}
          disabled={pageStart === 1}
        >
          &laquo;
        </button>
        <ul className="pagination">
          {visiblePageNumbers.map(number => (
            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
              <a onClick={(e) => { e.preventDefault(); paginate(number); }} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="pagination-arrow"
          onClick={handleNext}
          disabled={pageStart + pagesToShow - 1 >= pageNumbers.length}
        >
          &raquo;
        </button>
      </div>
      <div className="page-summary">
        {pageSummary()}
      </div>
    </nav>
  );
};

export default Pagination;
