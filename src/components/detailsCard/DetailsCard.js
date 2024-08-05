
import React from 'react'
import './DetailsCard.css'
function DetailsCard(data) {
  const data1=data.data
  console.log(data1)
  return (
    <div className="project-box shadow-lg text-success">
    <div className='d-flex justify-content-between'>
      <h3 className='text-start m1'>{data1['ProjectTitle']}</h3>
      <button type="button" className="btn btn-secondary">Secondary</button>
     
    </div>
  
    {/* <p className='text-start'><strong>Abstract:</strong> {abstract}</p>
    <p className='text-start'><strong>Branch:</strong> {branch}</p>
    // <p className='text-start'><strong>Year:</strong> {year}</p> */}
   
  </div>
  )
}

export default DetailsCard