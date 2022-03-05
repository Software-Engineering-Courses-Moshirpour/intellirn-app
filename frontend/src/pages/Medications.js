import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MedicationList from '../components/MedicationList';

const Medications  = () => {
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
                <li>Medications</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Select a medication from the list to get started</h3>
            <MedicationList />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Medications;
