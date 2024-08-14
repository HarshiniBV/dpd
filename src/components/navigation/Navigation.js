import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';
import a from '../images/logo.jpg';

function Navigation() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('name');
    console.log(storedUsername)
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [10]);

  const handleLogout = () => {
    localStorage.removeItem('name');
    setUsername(''); // Clear the username in state
    window.location.reload(); // Reload to update the navigation bar
  };

  return (
    <div>
      <ul className='nav bg-dark bg-gradient justify-content-between p-2'>
        <li className='title text-white'>
          <img src={a} className='img11' alt='Logo' />
        </li>
        <div className='d-flex'>
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
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/register'>Register</Link>
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
