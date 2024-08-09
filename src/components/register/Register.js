import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import x from '../images/img2.png';

function Register() {
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    name: '',
    email: '',
    password: '',
    role: 'student', // Default role to 'student'
    department: '', // Default department to null
    agreeToTerms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      id: formData.id,
      username: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      department: formData.department
    };
     console.log(dataToSend)
    const url = 'http://10.45.119.246:5000/register'; // Updated URL

    try {
      const response = await axios.post(url, dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      if(response.data.message==='User registered successfully!'){
      
      navigate('/login'); // Redirect to home page
      }
    } catch (error) {
      console.error(`Error submitting data: ${error.message}`);
      // handle error (e.g., display an error message)
    }
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Sign up</h2>
        <p>Register as a member to experience.</p>
        <form className="signup-form mx-auto text-start" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='p-2' htmlFor="id">ID</label>
            <input type="text" className="form-control" id="id" name="id" placeholder="ID" value={formData.id} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="role">Role</label>
            <select className="form-control" id="role" name="role" value={formData.role} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select>
          </div>
          <div className="form-group">
            <label className='p-2' htmlFor="department">Department</label>
            <select className="form-control" id="department" name="department" value={formData.department} onChange={handleChange}>
              <option value="" disabled>Select Department</option>
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
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
            <label className="form-check-label" htmlFor="terms">I agree to the terms of service</label>
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        <p className="signin-link">Already a member? <Link to="/login">Login</Link></p>
      </div>

      <div className="image-container">
        <div className="card text-bg-dark">
          <div className="gradient-overlay"></div>
          <img src={x} className="card-img" alt="Logistics" />
          <div className="card-img-overlay">
            <h1 className="card-title">WELCOME TO DUPLICATE PROJECT DETECTOR</h1>
            <p className="card-text text-start display-6">
              Ensuring Originality in Every Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;