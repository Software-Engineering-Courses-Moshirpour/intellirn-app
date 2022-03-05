import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFetch } from '../helpers/useFetch';

const SurveyDetails = () => {
  const { id } = useParams();
  let thisurl = `/api/survey?searchBy=surveyurl&searchTerm=${id}`;
  let navigate = useNavigate();
  const { loading, data } = useFetch(thisurl);
  const [details, setDetails] = useState({});

  const [choices, setChoices] = useState([]);
  const [content, setContent] = useState('Please click begin to get started');

  useEffect(() => {
    if (data.length === 1) {
      setDetails(data[0]);

      setChoices([
        {
          nid: data[0]['questionList'][0]['questionId'],
          name: 'Begin',
        },
      ]);
    }
  }, [loading]);

  const handleSelect = (e) => {
    let newChoices = [];

    for (var i = 0; i < details['questionList'].length; i++) {
      if (details['questionList'][i]['questionId'] == e.target.value) {
        setContent(details['questionList'][i]['content']);
      }
      if (details['questionList'][i]['nextUrl']!='' ){
        navigate('/survey/'+details['questionList'][i]['nextUrl']);
      }

      if (details['questionList'][i]['uid'] == e.target.value) {
        newChoices.push({
          nid: details['questionList'][i]['questionId'],
          name: details['questionList'][i]['stem'],
        });
      }
    }
    setChoices(newChoices);
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
            <h3 className='pb-3'>
              Survey on <b>{details['title'] || '<no title>'}</b>
            </h3>
            <small className='text-secondary emphasis pb-5'>Last updated: {details['lastUpdateDate'] || 'NA'}</small>

            <div className='row m-5 pt-3'>
              <div className='col-sm-4 o-hidden'>
                <img src={details['imageUrl'] || 'https://picsum.photos/200'} alt='' className='img-fluid p-2' style={{ height: '100%', objectFit: 'scale-down' }} />
              </div>
              <div className='col-sm-8 pt-3'>
                <div className='card'>
                  <div className='card-body'>
                    <p>{content}</p>

                    {choices?.map((dataItem) => {
                      let { nid, name } = dataItem;

                      return (
                        <button key={name} type='submit' value={nid} className='btn btn-outline-success m-2' onClick={(e) => handleSelect(e)}>
                          {name}
                        </button>
                      );
                    })}
                  </div>
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

export default SurveyDetails;
