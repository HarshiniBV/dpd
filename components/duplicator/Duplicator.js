import React, { useState } from 'react';
import './Duplicator.css';
import DetailsCard from '../detailsCard/DetailsCard';

const Duplicator = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="page3">
      <div className="header-box">
        <div className='box1 p-2'>
          <h1 className="text-center ">DUPLICATOR</h1>
          <p className="text-center">Keeping Projects Unique and Authentic</p>
        </div>
      </div>
      <div className="content-container">
        <div className="left-section shadow">
          {!file && (
            <div className="upload-container">
              <input type="file" id="file-upload" onChange={handleFileUpload} style={{ display: 'none' }} />
              <label htmlFor="file-upload" className="upload-button">Choose File</label>
            </div>
          )}
          {file && (
            <div className="file-preview-container">
              <iframe src={file} className="file-preview-expanded" title="File Preview" />
              <button className="remove-button" onClick={handleRemoveFile}>Remove File</button>
            </div>
          )}
        </div>
        <div className="right-section">
          <p className='match'>50%</p>
          <h1>MATCH TO</h1>
          <div className="project-details">
            <DetailsCard title="EXPLORING BRTS FOR ACCIDENT REDUCTION" abstract="BRTS is a higher user capacity transport system which delivers fast, reliable, comfort, accident less, and cost effective mode of movement for the customers." branch="IT" year="2020" />
            <DetailsCard title="Numerical modelling of Secant Piles" abstract="Several forces like lateral and axial forces act on piles hence the magnitude and distribution of lateral earth pressure, and axial force are taken into consideration." branch="CSE" year="2021" />
            {/* Add more DetailsCard components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Duplicator;




