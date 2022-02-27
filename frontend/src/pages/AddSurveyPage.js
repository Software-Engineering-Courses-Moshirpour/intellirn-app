import React from 'react';
import { Link } from 'react-router-dom';
import CreateSurvey from '../components/CreateSurvey';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AddSurveyPage = () => {
  return (
    <React.Fragment>
      <Header heading='Add Survey' />

      <main id='main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6></h6>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/survey'>Survey</Link>
                </li>
                <li>Add survey</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <CreateSurvey />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default AddSurveyPage;
