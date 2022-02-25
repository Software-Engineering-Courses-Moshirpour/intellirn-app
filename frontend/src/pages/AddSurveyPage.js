import React from 'react';



import { useEffect, useState } from 'react';

import CreateSurvey from '../components/CreateSurvey';
import Sidebar from './../components/Sidebar';
import ScrollTop from './../components/ScrollTop';
import Header from './../components/Header';
import Footer from './../components/Footer';

const AddSurveyPage = () => {
  const [psearchBy, setSearchBy] = useState(["",""]);
  const [psearchTerm, setSearchTerm] = useState("");
  return (
    <React.Fragment>
      <div id='wrapper'>
        <Sidebar/>

        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header heading='Create Survey' />
            <div className='container-fluid'>

              <CreateSurvey />
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </React.Fragment>
  );
};

export default AddSurveyPage;
