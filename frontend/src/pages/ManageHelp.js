import React from 'react';

import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ScrollTop from './../components/ScrollTop';

import { useEffect, useState } from 'react';
import HelpList from '../components/HelpList';
import ManageHelpList from '../components/ManageHelpList';
const ManageHelp = () => {

  return (
    <React.Fragment>
      <div id='wrapper'>
        <Sidebar />

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header heading='Please Select the Help Items Below' />
            <div className='container-fluid'>

              <ManageHelpList />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </React.Fragment>
  );
};

export default ManageHelp;
