import React from 'react';
import { useFetch } from '../helpers/useFetch';

import { getSurvey } from '../services/fakeSurveyServices';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const url = '/api/survey?searchBy=surveyurl&searchTerm=';
const HelpCard = () => {
    const { id } = useParams();
    let thisurl = url+id;
    console.log(thisurl);
    const { data } = useFetch(thisurl);
    console.log(data);
    const [choices, setChoices] = useState([{
        "nid": data[0]["questionList"]["questionId"], //essentially getting the topnode
        "name":"Begin"

    }]);
    const [content, setContent] = useState("Please click begin to get started");

    const handleSelect =(e)=>{
        console.log(e.target.value);
        let newChoices = [];
        for(var i = 0; i < data[0]["questionList"].length; i++)
        {
            if(data[0]["questionList"][i]["questionId"]==e.target.value){
                setContent(data[0]["questionList"][i]["content"])

            }

            if(data[0]["questionList"][i]["uid"]==e.target.value){
                newChoices.push({
                    "nid": data[0]["questionList"][i]["questionId"], //essentially getting the topnode
                    "name":data[0]["questionList"][i]["stem"]
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