import React from 'react';
import './DetailsCard.css';
import PercentageChart from '../PercentageChart/PercentageChart';

const DetailsCard1 = ({ data, score }) => (
  <div className="project-box shadow-lg container">
    <div className='row'>
      <div className='col-md-8 project-details'>
        
        <h5 className='text-start m-1 p-2'>
          <strong></strong> {data['ProjectTitle']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Faculty:</strong> {data['ProjectSupervisor']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Type:</strong> {data['Project_Type']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Department:</strong> {data['Department']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Domain:</strong> {data.AdditionalInfo['Domain']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Year:</strong> {data['ProjectId'].substring(0, 4)}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Project_Id:</strong> {data['ProjectId']}
        </h5>
      </div>
      <div className='col-md-4 chart-container'>
        <div className="percentage-chart">
          <PercentageChart percentage={score * 100} />
        </div>
        <p className='text-center m-1 p-2'><strong>Matching percentage</strong></p>
      </div>
    </div>
  </div>
);

export default DetailsCard1;
