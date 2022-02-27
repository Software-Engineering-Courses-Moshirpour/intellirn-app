import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ManageSurvey from './../components/ManageSurvey';

const ManageSurveyPage = () => {
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
                  <Link to='/admin-menu'>Admin menu</Link>
                </li>
                <li>Manage survey</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <ManageSurvey />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default ManageSurveyPage;
