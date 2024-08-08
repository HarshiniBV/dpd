import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faHandPaper, faHandRock, faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

function Navigation() {
  const username = localStorage.getItem('name');

  return (
    <div>
      <ul className='nav bg-dark bg-gradient justify-content-between'>
        <li className='title text-white pt-2'>DuplicaXpert</li>
        <div className='d-flex'>
          <li className='nav-item'>
            <Link className='nav-link text-white' to=''>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='register'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='login'>Login</Link>
          </li>
          {username && (
            <li className='nav-item text-white pt-2'>
              <FontAwesomeIcon icon={faHandPaper} /> Hi {username}       
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navigation;
