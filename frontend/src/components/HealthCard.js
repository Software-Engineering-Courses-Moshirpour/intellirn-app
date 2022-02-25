import React from 'react';
import { useFetch } from '../helpers/useFetch';

import { getSurvey } from '../services/fakeSurveyServices';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const HelpCard = () => {
    const [choices, setChoices] = useState([{
        "nid": getSurvey()[0]["questions"][0]["id"], //essentially getting the topnode
        "name":"Begin"

    }]);
    const [content, setContent] = useState("Please click begin to get started");



    return (
      <div className='row'>
        <div className='col-lg-10'>
          <div className='card shadow mb-4'>
            <div className='card-body'>
                <p>{content}</p>
                {choices?.map((dataItem) => {
                      let { name} = dataItem;
                      console.log("name: " + name);


                      return (
                        <tr key={name}>
                          <td>
                          <button type='submit'  className='btn btn-primary my-2'>
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