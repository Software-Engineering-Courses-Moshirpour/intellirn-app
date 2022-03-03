import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../helpers/useFetch';
import { deleteCall } from '../helpers/deleteCall';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsDetailsCard from '../components/ContactUsDetailsCard';

const ContactUsDetails = () => {
  const { id } = useParams();
  let thisurl = `/api/contactus/${id}`;

  let navigate = useNavigate();

  const { data } = useFetch(thisurl);

  function handleMessageDelete(e) {
    deleteCall(thisurl).then((result) => {
      window.alert(result['data']['message']);

      if (result['status'] == 200) {
        navigate('/admin-menu/contactus');
      }
    });
  }

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
                <li>
                  <Link to='/admin-menu/contactus'>Received messages</Link>
                </li>
                <li>Message {data['contactUsId']}</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Message details</h3>
            <ContactUsDetailsCard data={data} />

            <button className='btn btn-danger' onClick={handleMessageDelete}>
              Delete this message
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default ContactUsDetails;
