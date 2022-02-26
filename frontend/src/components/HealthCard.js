import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { getSurvey } from '../services/fakeSurveyServices';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HelpCard = () => {
  const url = '/api/survey?searchBy=surveyurl&searchTerm=';
  const { id } = useParams();
  let thisurl = url + id;
  //const { data } = useFetch(thisurl);

  const { loading, data } = useFetch(thisurl);
  console.log(thisurl);
  console.log(data);
  const [choices, setChoices] = useState([]);
  const [content, setContent] = useState('Please click begin to get started');

  // const [choices, setChoices] = useState([
  //   {
  //     nid: data[0]['questionList']['questionId'], //essentially getting the topnode
  //     name: 'Begin',
  //   },
  // ]);


  useEffect(() => {
    console.log("tryting to log some statement");
    console.log(data);
    if(data.length>0){
      console.log("data detected");
      setChoices([
        {
          nid: data[0]['questionList'][0]['questionId'], //essentially getting the topnode
          name: 'Begin',
        },
      ]);
      console.log("Choices length: " + choices.length);

    }



  }, [!loading]);



  const handleSelect = (e) => {
    console.log(e.target.value);
    console.log("Choices length: " + choices[0]["nid"]);
    let newChoices = [];
    for (var i = 0; i < data[0]['questionList'].length; i++) {
      if (data[0]['questionList'][i]['questionId'] == e.target.value) {
        setContent(data[0]['questionList'][i]['content']);
      }

      if (data[0]['questionList'][i]['uid'] == e.target.value) {
        newChoices.push({
          nid: data[0]['questionList'][i]['questionId'], //essentially getting the topnode
          name: data[0]['questionList'][i]['stem'],
        });
      }
    }
    setChoices(newChoices);
  };

  return (
    <div className='row'>
      <div className='col-lg-10'>
        <div className='card shadow mb-4'>
          <div className='card-body'>
            <p>{content}</p>
            {choices?.map((dataItem) => {
              let { nid, name } = dataItem;
              console.log('name: ' + name);
              console.log('id: ' + nid);

              return (
                <tr key={name}>
                  <td>
                    <button type='submit' onClick={(e) => handleSelect(e)} value={nid} className='btn btn-primary my-2'>
                      {name}
                    </button>
                  </td>
                </tr>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;