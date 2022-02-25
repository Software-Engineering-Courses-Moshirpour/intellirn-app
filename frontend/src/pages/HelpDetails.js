import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { Link } from 'react-router-dom';
import { getSurvey } from '../services/fakeSurveyServices';
import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ScrollTop from './../components/ScrollTop';
import HelpCard from '../components/HealthCard';
const HelpDetails = () => {


    return (
        <React.Fragment>
        <div id='wrapper'>
          <Sidebar />

          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Header heading={getSurvey()[0]['name']} />
              <div className='container-fluid'>
                  <HelpCard />


              </div>
            </div>

            <Footer />
          </div>
        </div>

        <ScrollTop />
      </React.Fragment>
    );
  };

  export default HelpDetails;