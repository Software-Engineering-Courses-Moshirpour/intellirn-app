import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='header' className='fixed-top'>
      <div className='container d-flex align-items-center justify-content-between'>
        <h1 className='logo'>
          <Link to='/' href='index.html'>
            IntelliRN
          </Link>
        </h1>

        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <Link className='nav-link' to='/survey'>
                Survey
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/education'>
                Education
              </Link>
            </li>
            <li>
              <Link className='nav-link' to='/contactus'>
                Contact us
              </Link>
            </li>
            <li>
              <Link className='getstarted' to='/admin-menu'>
                Admin menu
              </Link>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
