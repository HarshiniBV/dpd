import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import y from '../images/img3.png';
import './Login.css';

const CLIENT_ID = '237430262201-i7vj50gpthm0hnbkdqcdkphp6gsv7tok.apps.googleusercontent.com';  // Your Google Client ID

function Login() {
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
    // Handle successful login here, e.g., save the user data or redirect to another page
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
    // Handle login failure here
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
        <form className="signup-form mx-auto text-start">
          <div className="form-group">
            <label className="email p-2" htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label className="pass p-2" htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="terms" />
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
