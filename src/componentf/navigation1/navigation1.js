import React from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHandPaper, faHandRock, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './navigation1.css';
import a from '../../components/images/logo.jpg'

function Navigation1() {
 // const username = localStorage.getItem('name');

  return (
    <div>
      <ul className='nav bg-dark bg-gradient justify-content-between p-2'>
        <li className='title text-white'><img src={a} className='img11' alt='not found' /></li>
        <div className='d-flex'>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='faculty'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='register'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='login'>Login</Link>
          </li>
          {/* {username && (
            <li className='nav-item text-white pt-2'>
              <FontAwesomeIcon icon={faHandPaper} /> Hi {username}       
            </li>
          )} */}
        </div>
      </ul>
    </div>
  );
}

export default Navigation1;