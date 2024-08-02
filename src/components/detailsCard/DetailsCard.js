import React from 'react';
import './DetailsCard.css';
import PercentageChart from '../PercentageChart/PercentageChart';
const DetailsCard = ({ data ,score}) => (
 
  <div className="project-box shadow-lg">
    <div className='d-flex justify-content-between'>
      <h3 className='text-start m1'>{data['ProjectTitle']}</h3>
      <button type="button" className="btn btn-secondary">Secondary</button>
     
    </div>
    <p className='text-start'><strong>Score</strong> {score*100}</p> 
    {/* <p className='text-start'><strong>Abstract:</strong> {abstract}</p>
    <p className='text-start'><strong>Branch:</strong> {branch}</p>
    // <p className='text-start'><strong>Year:</strong> {year}</p> */}
    <div className='d-flex'>
      <button type="button" className="btn btn-outline-success">more</button>
    </div>
  </div>
);

export default DetailsCard;
