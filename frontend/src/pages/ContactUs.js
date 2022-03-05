import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postCall } from '../helpers/postCall';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postCall('/api/contactus', message).then((result) => {
      window.alert(result['data']['message']);

      if (result['status'] === 200) {
        setMessage({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    });

    document.getElementById('contactform').reset();
  };

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
                <li>Contact us</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <section className='bg-danger'>
        <div className='container'>
          <div className='text-center text-light'>
            <h2>
              For emergencies, call <b>911</b>
            </h2>
          </div>
        </div>
      </section>

      <main id='main'>
        <section id='contact' className='contact'>
          <div className='container'>
            <div className='section-title'>
              <span>Contact us</span>
              <h2>Contact us</h2>
              <p>Reach us via phonecall, email, or simply fill the form below!</p>
            </div>

            <div className='row'>
              <div className='col-lg-5 d-flex align-items-stretch'>
                <div className='info'>
                  <div className='address'>
                    <i className='bi bi-geo-alt'></i>
                    <h4>Location:</h4>
                    <p>2500 University Dr NW, Calgary, AB T2N1N4</p>
                  </div>

                  <div className='email'>
                    <i className='bi bi-envelope'></i>
                    <h4>Email:</h4>
                    <p>
                      <a href='mailto:info@intellirn.ml' style={{ color: 'inherit' }}>
                        info@intellirn.ml
                      </a>
                    </p>
                  </div>

                  <div className='phone'>
                    <i className='bi bi-phone'></i>
                    <h4>Call:</h4>
                    <p>
                      <a href='tel:+19876543210' style={{ color: 'inherit' }}>
                        +1 9876 5432 10
                      </a>
                    </p>
                  </div>

                  <img src={`${process.env.PUBLIC_URL + '/images/hospital_reception.svg'}`} alt='hospital reception' />
                </div>
              </div>

              <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
                <form className='php-email-form' id='contactform' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='form-group col-md-6'>
                      <label htmlFor='name'>Your Name</label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        id='name'
                        maxLength='100'
                        value={message['name']}
                        required
                        onChange={(e) => {
                          setMessage({ ...message, name: e.target.value });
                        }}
                      />
                    </div>
                    <div className='form-group col-md-6 mt-3 mt-md-0'>
                      <label htmlFor='name'>Your Email</label>
                      <input
                        type='email'
                        className='form-control'
                        name='email'
                        id='email'
                        maxLength='100'
                        value={message['email']}
                        required
                        onChange={(e) => {
                          setMessage({ ...message, email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className='form-group mt-3'>
                    <label htmlFor='name'>Subject</label>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      id='subject'
                      maxLength='100'
                      value={message['subject']}
                      required
                      onChange={(e) => {
                        setMessage({ ...message, subject: e.target.value });
                      }}
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <label htmlFor='name'>Message</label>
                    <textarea
                      className='form-control'
                      name='message'
                      rows='10'
                      maxLength='1000'
                      value={message['message']}
                      onChange={(e) => {
                        setMessage({ ...message, message: e.target.value });
                      }}
                      required
                    ></textarea>
                  </div>
                  <div className='my-3'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>Your message has been sent. Thank you!</div>
                  </div>
                  <div className='text-center'>
                    <button type='submit'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
