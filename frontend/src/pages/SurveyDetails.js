import React from 'react';
import { Link } from 'react-router-dom';
import { getSurvey } from '../services/fakeSurveyServices';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HealthCard from '../components/HealthCard';

const SurveyDetails = () => {
  return (
    <React.Fragment>
      <Header />

      <main id='main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4 style={{ visibility: 'hidden' }}>heading not to be displayed</h4>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/survey'>Survey</Link>
                </li>
                <li>{getSurvey()[0]['name']}</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <HealthCard />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SurveyDetails;
