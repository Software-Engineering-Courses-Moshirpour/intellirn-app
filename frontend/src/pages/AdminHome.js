import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdminMenu from '../components/AdminMenu';

const AdminHome = () => {
  return (
    <React.Fragment>
      <Header heading='Admin menu' />

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
            <AdminMenu />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default AdminHome;
