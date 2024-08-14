import React from 'react';
import './DetailsCard1.css';
import PercentageChart from '../PercentageChart/PercentageChart';

const DetailsCard1 = ({ data, score }) => (
  <div className="project-box shadow-lg justify-content-center col-lg-5 container m-1">
    <div className="row">
      <div className="col-12">
        <h3 className="text-center m-1 p-2">
          <strong>{data['ProjectTitle'] || 'N/A'}</strong>
        </h3>
      </div>
      <div className="col col-md-8">
       
        <h5 className="text-start p-2 m-1">
          <strong>Faculty:</strong> {data['ProjectSupervisor']}
        </h5>
        <h5 className="text-start m-1 p-2">
          <strong>Type:</strong> {data['Project_Type']}
        </h5>
        <h5 className="text-start m-1 p-2">
          <strong>Department:</strong> {data['Department']}
        </h5>
        {data.AdditionalInfo && data.AdditionalInfo['Domain'] && (
          <h5 className="text-start m-1 p-2">
            <strong>Domain:</strong> {data.AdditionalInfo['Domain']}
          </h5>
          
        )}
        <h5 className="text-start m-1 p-2">
          <strong>Year:</strong> {data['ProjectId'] ? data['ProjectId'].substring(0, 4) : 'N/A'}
        </h5>
         <h5 className="text-start m-1 p-2">
          <strong>Project_Id:</strong> {data['ProjectId']}
        </h5>
      </div>
    </div>
  </div>
);

export default DetailsCard1;
