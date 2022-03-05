import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../helpers/useAuth';
import { postCall } from '../helpers/postCall';

const Login = () => {
  const navigate = useNavigate();
  const { authed, login } = useAuth();

  const [message, setMessage] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    postCall('/api/auth', message).then((result) => {
      if (result['status'] === 200) {
        let messageSplit = result['data']['message'].split('|||');

        // document.cookie = `token=${result['data']['message']}; SameSite=None; Secure`;
        window.localStorage.setItem('loginid', messageSplit[0]);
        window.localStorage.setItem('token', messageSplit[1]);

        login().then(() => {
          navigate('/');
        });
      } else {
        window.alert(result['data']['message']);
      }
    });
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
                <li>Login</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Welcome back</h3>

            <div className='row'>
              <div className='col-lg-5'>
                <img src={`${process.env.PUBLIC_URL + '/images/nurse_helping_handicapped_man.svg'}`} alt='hospital reception' />
              </div>
              <div className='col-lg-5 p-5'>
                <form id='loginForm' onSubmit={handleLogin}>
                  <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='email'
                      maxLength='100'
                      value={message['email']}
                      placeholder='john.doe@gmail.com'
                      required
                      onChange={(e) => {
                        setMessage({ ...message, email: e.target.value });
                      }}
                    />
                  </div>

                  <div className='form-group pt-4'>
                    <label htmlFor='password'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      id='password'
                      maxLength='100'
                      value={message['password']}
                      placeholder='secret'
                      required
                      onChange={(e) => {
                        setMessage({ ...message, password: e.target.value });
                      }}
                    />
                  </div>

                  <div className='form-group pt-4'>
                    <button className='btn btn-success btn-user btn-block'>Login</button>
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
export default Login;
