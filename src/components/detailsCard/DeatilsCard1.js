import React from 'react';
import './DetailsCard.css';
import PercentageChart from '../PercentageChart/PercentageChart'
const DetailsCard1 = ({ data ,score}) => (
 
  <div className="project-box shadow-lg justify-content-center col-lg-5 container">

    {/* <div className='d-flex justify-content-between'> */}
    <div className='row'>
        {/* <div className='justify-content-column m-1'> */}
        <div className='col col-md-8'>
        <h5 className='text-start m-1 p-2'>
          <strong>Project_Id:</strong> {data['ProjectId']}
        </h5>
        <h5 className='text-start m-1 p-2'>
          <strong>Title:</strong> {data['ProjectTitle']}
        </h5>
        <h5 className='text-start p-2 m-1'>
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
        </div>
     
        {/* <div className='justifycontent-column'> */}
        <div className='col col-md-4'>
      <PercentageChart percentage={score*100} />
      <p className='text-start m-1 p-2'><strong>Score : </strong> {score*100}</p>  
        </div>
     
    </div>
  </div>
);

export default DetailsCard1;

