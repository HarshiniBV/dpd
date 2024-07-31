import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ title,abstract,branch,year }) => (
  <div className="project-box shadow-lg">
    <div className='d-flex justify-content-between'>
      <h3 className='text-start'>{title}</h3>
      <button type="button" class="btn btn-secondary">Secondary</button>
    </div>
    
    <p className='text-start'><strong>Abstract:</strong> {abstract}</p>
    <p className='text-start'><strong>Branch:</strong> {branch}</p>
    <p className='text-start'><strong>Year:</strong> {year}</p>
    <div className='d-flex'><button type="button" class="btn btn-outline-success">more</button></div>
  </div>
);

export default DetailsCard;
