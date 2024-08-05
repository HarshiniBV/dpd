import React from 'react';
import './Filter.css'
import { useLocation } from 'react-router-dom';
import Projects from '../projects/Projects';
function Filters() {
  const location=useLocation()
  const {state}=useLocation()
  console.log(location)
  console.log(state)
  const projects=state
  
  
  return (

    <div>
      {projects.map((project) => (
        <div key={project.id} className="project-box  shadow-lg">
          <div className='d-flex ' style={{flexDirection:'column'}}>
            <h3 className='text-start m1'><strong>Title:</strong> {project.ProjectTitle}</h3>
            <h3 className='text-start m1'><strong>ProjectID:</strong>  {project.ProjectId}</h3>
            <h3 className='text-start m1'><strong>Year:</strong>  {project.Year}</h3>
            <h3 className='text-start m1'><strong>Domain:</strong> {project.Domain}</h3>
           
          </div>
          
          {/* Uncomment these lines if you want to display abstract, branch, and year */}
          {/* <p className='text-start'><strong>Abstract:</strong> {project.abstract}</p>
          <p className='text-start'><strong>Branch:</strong> {project.branch}</p>
          <p className='text-start'><strong>Year:</strong> {project.year}</p> */}
          
          {/* <div className='d-flex'>
            <button type="button" className="btn btn-outline-success">more</button>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Filters;
