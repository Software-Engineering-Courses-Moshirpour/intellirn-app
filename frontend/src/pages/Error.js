import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
  let notFoundPic = '/images/page_not_found.svg';

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
                <li>Error</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <div className='container container-fluid align-items-center'>
              <img className='img-fluid' src={process.env.PUBLIC_URL + notFoundPic} alt='404' style={{ maxHeight: '400px' }} />
            </div>
            <Link to='/' className='btn btn-primary btn-icon-split m-5'>
              <span className='text'>Back to home</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Error;
