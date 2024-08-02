import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'



function Navigation() {
  return (
    <div>
        <ul className='nav bg-dark bg-gradient justify-content-between'>
            <li className='title text-white pt-2'>Duplicate Project Detector</li>
            <div className='d-flex'>
             <Link className='nav-link text-white' to=''>Home</Link>
            {/* <li className='nav-item'>
                <Link className='nav-link text-white' to='register'>Register</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link text-white' to='login'>Login</Link>
            </li> */}
            </div>
        </ul>
    </div>
  )
}

export default Navigation






//<li className='nav-item'>
//<Link className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to=''>
// Home
//</Link>
  //  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //    <Link className="dropdown-item text-white" href="#" to='projects' >Projects</Link>
     //<Link className="dropdown-item text-white" href="#" to='duplicationDetector'>Duplication Detector</Link>
   //</div>
//</li>