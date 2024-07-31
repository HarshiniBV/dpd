import React from 'react'
import { Link } from 'react-router-dom';
import y from '../images/img3.png';
import './Login.css'

function Login() {
  return (
    <div className="signup-container">

<div className="image-container ">
      <div className="card text-bg-dark ">
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
      <p>Register as a member to experience.</p>
      <form className="signup-form mx-auto text-start ">
        <div className="form-group ">
          <label className='email p-2' htmlFor="email">E-mail</label>
          <input type="email" className="form-control " id="email" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <label className='pass p-2' htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="terms" />
          <label className="form-check-label" htmlFor="terms">I agree to the terms of service</label>
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      <p className="signin-link">Already a member? <Link to="/login">Login</Link></p>
    </div>
  </div>
  )
}

export default Login