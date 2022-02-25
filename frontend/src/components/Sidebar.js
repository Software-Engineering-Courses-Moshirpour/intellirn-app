import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
      <Link className='sidebar-brand d-flex align-items-center justify-content-center' to='/home'>
        <div className='sidebar-brand-icon rotate-n-15'>
          <i className='fas fa-book-open'></i>
        </div>
        <div className='sidebar-brand-text mx-3'>HTPT</div>
      </Link>

      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Action</div>

      <li className='nav-item'>
        <Link className='nav-link text-white' to='/education'>
          <i className='fas fa-fw fa-anchor'></i>
          <span>Education</span>
        </Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-link text-white' to='/help'>
          <i className='fas fa-fw fa-award'></i>
          <span>Help</span>
        </Link>
      </li>



      <hr className='sidebar-divider' />



      <hr className='sidebar-divider' />

      <div className='sidebar-heading'>Admin</div>

      <li className='nav-item'>
        <Link className='nav-link text-white' to='/admin'>
          <i className='fas fa-fw fa-tachometer-alt'></i>
          <span>Manage Content</span>
        </Link>
      </li>

      <hr className='sidebar-divider d-none d-md-block' />

      <div className='text-center d-none d-md-inline'>
        <button className='rounded-circle border-0' id='sidebarToggle'></button>
      </div>
    </ul>
  );
};

export default Sidebar;
