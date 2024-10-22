import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';
import a from '../images/logoo.png';

function Navigation() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('name');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('name');
    setUsername(''); // Clear the username in state
    window.location.reload(); // Reload to update the navigation bar
  };

  return (
    <div>
      <ul className='nav bg-dark bg-gradient justify-content-between p-1'>
        <li className='d-flex align-items-center p-1 title text-white'>
          <img src={a} className='img11' alt='Logo' />
          <p className='m-0 p-1'>DuplicaXplore</p>
        </li>
        <div className='d-flex align-items-center'>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to='/catalog'>Catalog</Link>
          </li>
          {/* {!username ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/login'>Login</Link>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item text-white pt-2'>
                <FontAwesomeIcon icon={faHandPaper} /> Hi {username}
              </li>
              <li className='nav-item text-white pt-2' onClick={handleLogout} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </li>
            </>
          )} */}
        </div>
      </ul>
    </div>
  );
}

export default Navigation;

