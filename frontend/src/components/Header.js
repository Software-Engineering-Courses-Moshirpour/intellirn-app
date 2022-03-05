import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  function handleMenuToggle(e) {
    document.getElementById('navbar').classList.toggle('navbar-mobile');
    document.getElementById('mobile-menu-button').classList.toggle('bi-list');
    document.getElementById('mobile-menu-button').classList.toggle('bi-x');
  }

  function handleLogout(e) {
    // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.localStorage.removeItem('loginid');
    window.localStorage.removeItem('token');

    logout().then(() => {
      navigate('/login');
    });
  }

  const loginStatus = localStorage.getItem('Auth');

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
            {loginStatus === '1' ? (
              <React.Fragment>
                <li>
                  <Link className='nav-link' to='/admin-menu'>
                    Admin menu
                  </Link>
                </li>
                <li>
                  <a className='getstarted' href='#' onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </React.Fragment>
            ) : (
              <li>
                <Link className='getstarted' to='/login'>
                  Log in
                </Link>
              </li>
            )}
          </ul>
          <i id='mobile-menu-button' className='bi bi-list mobile-nav-toggle' onClick={handleMenuToggle}></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
