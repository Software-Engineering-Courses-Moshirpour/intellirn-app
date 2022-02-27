import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1>Providing solutions to your HPTP needs</h1>
              <h2>We are team of talented registered nurses who care for you</h2>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 hero-img'>
              <img src={`${process.env.PUBLIC_URL + '/images/vaccination.svg'}`} className='img-fluid animated' alt='' />
            </div>
          </div>
        </div>
      </section>

      <main id='main'>
        <section id='services' className='services section-bg'>
          <div className='container'>
            <div className='section-title'>
              <span>Services</span>
              <h2>Services</h2>
              <p>Check out online services provided by us</p>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-file'></i>
                  </div>
                  <h4>
                    <Link to='/survey'>Survey</Link>
                  </h4>
                  <p>Online surveys designed by professionals to suggest you the next course of action</p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-slideshow'></i>
                  </div>
                  <h4>
                    <Link to='/education'>Education</Link>
                  </h4>
                  <p>Educative articles written by field experts, along with video with easy explanations</p>
                </div>
              </div>

              <div className='col-lg-4 mt-4 mt-lg-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-world'></i>
                  </div>
                  <h4>
                    <Link to='/contact'>Contact</Link>
                  </h4>
                  <p>Are you still in doubt? Then please don't hesitate to contact us</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
