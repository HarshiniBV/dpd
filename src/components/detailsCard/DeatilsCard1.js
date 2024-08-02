import React from 'react';
import './DetailsCard.css';
import PercentageChart from '../PercentageChart/PercentageChart';
const DetailsCard1 = ({ data ,score}) => (
 
  <div className="project-box shadow-lg col-lg-5">
    <div className='d-flex justify-content-between'>
        <div className='justify-content-column m-1'>
        <h5 className='text-start m-1 p-2'>Project_Id : {data['ProjectId']}</h5>
             <h5 className='text-start m-1 p-2'>Title :  {data['ProjectTitle']}</h5>
        <h5 className='text-start p-2 m-1'>Faculty  :  { data['ProjectSupervisor']}</h5>
        <h5 className='text-start m-1 p-2'>Type :  {data['Project_Type']}</h5>
        <h5 className='text-start m-1 p-2'>Department : {data['Department']}</h5>
        <h5 className='text-start m-1 p-2'> Domain : {data.AdditionalInfo['Domain']}</h5>
        <h5 className='text-start m-1 p-2'>Year : {data['ProjectId'].substring(0,4)}</h5>
       
        </div>
     
        <div className='justifycontent-column'>
      <PercentageChart percentage={score*100} />
      <p className='text-start m-1 p-2'><strong>Score : </strong> {score*100}</p>  </div>
     
    </div>
   
    {/* <p className='text-start'><strong>Abstract:</strong> {abstract}</p>
    <p className='text-start'><strong>Branch:</strong> {branch}</p>
    // <p className='text-start'><strong>Year:</strong> {year}</p> */}
   
  </div>
  
 
);

export default DetailsCard1;
