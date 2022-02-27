import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';

const Header = (props) => {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // calls api to verify login, stores jwt tokens here

    // carry on if successful
    logout().then(() => {
      navigate('/');
    });
  };

  let { heading } = props;
  heading = heading || '';

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
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li>
              <Link className='getstarted' to='/login'>
                Admin login
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
