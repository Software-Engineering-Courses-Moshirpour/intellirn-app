import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFetch } from '../helpers/useFetch';
import HealthCard from '../components/HealthCard';

const SurveyDetails = () => {
  const { id } = useParams();
  let thisurl = `/api/survey?searchBy=surveyurl&searchTerm=${id}`;

  const { loading, data } = useFetch(thisurl);
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (data.length === 1) {
      setDetails(data[0]);
    }
  }, [loading]);

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
                  <Link to='/survey'>Survey</Link>
                </li>
                <li>{details['title']}</li>
              </ol>
            </div>
          </div>
        </section>

        <section className='inner-page'>
          <div className='container'>
            <h3 className='pb-5'>Survey on {details['title']}</h3>
            <HealthCard />
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SurveyDetails;
