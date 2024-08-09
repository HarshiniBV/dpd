import React, { useState } from 'react';
import './FileUpload.css';


function FileUpload() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [requirements, setRequirements] = useState('');
  const [staffName, setStaffName] = useState('');
  const [domain, setDomain] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      abstract,
      requirements,
      staffName,
      domain,
      department,
    };

    try {
      const response = await fetch('http://10.45.119.246:5000/add_project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // handle successful submission
        alert('Project submitted successfully!');
        // Clear the form fields
        setTitle('');
        setAbstract('');
        setRequirements('');
        setStaffName('');
        setDomain('');
        setDepartment('');
      } else {
        // handle errors
        alert('Failed to submit the project. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="upload-container" >
      <div className="overlay">
        <h1>Submit Your Data</h1>
        <form onSubmit={handleSubmit} className="upload-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="abstract">Abstract</label>
            <textarea
              id="abstract"
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="requirements">Requirements</label>
            <textarea
              id="requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="staffName">Staff Name</label>
            <input
              type="text"
              id="staffName"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="CE">CE</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="CSE">CSE</option>
              <option value="CS-AIML">CS-AIML</option>
              <option value="CS-DS">CS-DS</option>
              <option value="CS-IOT">CS-IOT</option>
              <option value="CS-CyS">CS-CyS</option>
              <option value="AI & DS">AI & DS</option>
              <option value="CSBS">CSBS</option>
              <option value="EIE">EIE</option>
              <option value="IT">IT</option>
              <option value="AE">AE</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FileUpload;