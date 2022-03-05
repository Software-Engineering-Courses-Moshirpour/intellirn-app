import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommonInfectionsList from '../components/CommonInfectionsList';
const CommonInfections = () => {
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
                <Link to='/education'>Education</Link>
                </li>
                <li>Common Infections</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Select a common infection from the list to get started</h3>
            <CommonInfectionsList />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default CommonInfections;
