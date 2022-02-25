import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';
import profilePic from '../assets/img/undraw_profile_3.svg';

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
    <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
      <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
        <i className='fa fa-bars'></i>
      </button>
      <h4
        className='text-dark px-3 text-capitalize font-weight-bold o-hidden'
        style={{
          maxWidth: '70%',
          textOverflow: 'ellipsis',
          WebkitLineClamp: '1',
          lineClamp: '1',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {heading}
      </h4>

    </nav>
  );
};

export default Header;
