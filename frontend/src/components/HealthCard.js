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

    const handleSelect =(e)=>{
        console.log(e.target.value);
        let newChoices = [];
        for(var i = 0; i < getSurvey()[0]["questions"].length; i++)
        {
            if(getSurvey()[0]["questions"][i]["id"]==e.target.value){
                setContent(getSurvey()[0]["questions"][i]["content"])

            }

            if(getSurvey()[0]["questions"][i]["uid"]==e.target.value){
                newChoices.push({
                    "nid": getSurvey()[0]["questions"][i]["id"], //essentially getting the topnode
                    "name":getSurvey()[0]["questions"][i]["stem"]
                })

            }

        }
        setChoices(newChoices);


    }



    return (
      <div className='row'>
        <div className='col-lg-10'>
          <div className='card shadow mb-4'>
            <div className='card-body'>
                <p>{content}</p>
                {choices?.map((dataItem) => {
                      let {nid,name} = dataItem;
                      console.log("name: " + name);


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