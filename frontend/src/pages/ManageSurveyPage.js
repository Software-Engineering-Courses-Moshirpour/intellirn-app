import React from 'react';



import { useEffect, useState } from 'react';

import CreateSurvey from '../components/CreateSurvey';
import Sidebar from './../components/Sidebar';
import ScrollTop from './../components/ScrollTop';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ManageSurvey from './../components/ManageSurvey';

const ManageSurveyPage = () => {
  const [psearchBy, setSearchBy] = useState(["",""]);
  const [psearchTerm, setSearchTerm] = useState("");
  return (
    <React.Fragment>
      <div id='wrapper'>
        <Sidebar/>

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header heading='Update Survey' />
            <div className='container-fluid'>

              <ManageSurvey />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </React.Fragment>
  );
};

export default ManageSurveyPage;
