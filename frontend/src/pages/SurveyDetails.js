import React from 'react';
import { Link } from 'react-router-dom';
import { getSurvey } from '../services/fakeSurveyServices';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HelpCard from '../components/HealthCard';

const SurveyDetails = () => {
  return (
    <React.Fragment>
      <Header heading={getSurvey()[0]['name']} />

      <main id='main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6></h6>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>Admin menu</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <HelpCard />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SurveyDetails;
