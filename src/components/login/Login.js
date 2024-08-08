import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import y from '../images/img3.png';
import './Login.css';

const CLIENT_ID = '606074391636-0725jnvffuktld7qbkk9ok05k61cr7h8.apps.googleusercontent.com';  // Your Google Client ID

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    const url = 'http://10.45.119.246:5000/login';  // The URL for login endpoint

    try {
      const response = await axios.post(url, {
        username: formData.username,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Login Success:', response.data.user.username);
      localStorage.setItem('name', response.data.user.username);

      // Handle successful login, e.g., save the user data or redirect to another page
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login Failed:', error.response ? error.response.data : error.message);
      // Handle login failure, e.g., show an error message
    }
  };

  const onSuccess = (response) => {
    console.log('Google Login Success:', response.profileObj);
    // Handle successful Google login here, e.g., save the user data or redirect to another page
  };

  const onFailure = (response) => {
    console.log('Google Login Failed:', response);
    // Handle Google login failure here
  };

  return (
    <div className="signup-container">
      <div className="image-container">
        <div className="card text-bg-dark">
          <div className="gradient-overlay"></div>
          <img src={y} className="card-img" alt="Logistics" />
          <div className="card-img-overlay">
            <h1 className="card-title">WELCOME TO DUPLICATE PROJECT DETECTOR</h1>
            <p className="card-text text-start display-6">
              Keeping Projects Unique and Authentic
            </p>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h2>Login</h2>
        <p>Get ready to experience.</p>
        <form className="signup-form mx-auto text-start" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="email p-2" htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="pass p-2" htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="terms">I agree to the terms of service</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="google-login">
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <p className="signin-link">Not a member? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;
