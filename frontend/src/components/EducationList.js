import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../helpers/useFetch';


const EducationList = () => {
  const url = '/api/education';
  const { data } = useFetch(url);


  return (
    <div className='table-responsive'>
      <table className='table table-hover' id='dataTable' width='100%'>
        <tbody>
          {data?.map((dataItem) => {
            let { title, imageUrl, description,educationUrl} = dataItem;

            
            if (dataItem.description === "Common Infections"){
            return (
              <tr key={title}>
                <td >
                  <Link
                    to={`/education/${title}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {title}
                    <img src = {imageUrl}/>
                  </Link>
                </td>

              </tr>
            );
                  }
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default EducationList;
