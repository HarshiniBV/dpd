import React from 'react';
import DetailsCard from '../detailsCard/DetailsCard';
import './Project.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="container-fluid">
        <div className='box1 p-2 text-dark'>
          <h1 className="text-center">PROJECTS</h1>
          <p className="text-center">Find, Learn, and Inspire</p>
        </div>
        <hr className='hrr'/>
        <form className="form d-flex justify-content-center" role="search">
          <input className="form-control me-2 shadow" type="search" placeholder="Enter Title" aria-label="Search" />
          <select className="form-select me-2 shadow">
            <option>Select Project Type</option>
            <option>Type 1</option>
            <option>Type 2</option>
          </select>
          <select className="form-select me-2 shadow">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
          <button className="btn btn-secondary shadow" type="submit">Search</button>
        </form>
        <div className="project-list">
          <DetailsCard title="EXPLORING BRTS FOR ACCIDENT REDUCTION" abstract="BRTS is a higher user capacity transport system which delivers fast, reliable, comfort, accident less, and cost effective mode of movement for the customers." branch="IT" year="2020" />
          <DetailsCard title="Numerical modelling of Secant Piles" abstract="Several forces like lateral and axial forces act on piles hence the magnitude and distribution of lateral earth pressure, and axial force are taken into consideration." branch="CSE" year="2021" />
          <DetailsCard title="Biodegradation of commercially available plastic waste in soil under field condition" abstract="Different commercially available plastic waste are degraded and an attempt will be made to degrade them in composting condition." branch="ECE" year="2022"/>
        </div>
      </div>
    </div>
  );
}

export default Projects;

