import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HelpList from '../components/HelpList';

const Survey = () => {
  return (
    <React.Fragment>
      <Header heading='Please Select the Help Items Below' />

      <main id='main'>
        <section className='breadcrumbs'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h6></h6>
              <ol>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>Survey</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <HelpList />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Survey;
