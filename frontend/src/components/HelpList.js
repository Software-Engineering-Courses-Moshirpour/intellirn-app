import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { Link } from 'react-router-dom';
import { getSurvey } from '../services/fakeSurveyServices';
const HelpList = () => {

    return (
      <div className='row'>
        <div className='col-lg-10'>
          <div className='card shadow mb-4'>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-bordered table-hover' id='dataTable' width='100%' cellSpacing='0'>
                  <thead className='table-secondary text-dark'>
                    <tr>
                      <th>Survey</th>

                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Survey</th>

                    </tr>
                  </tfoot>
                  <tbody>
                    {getSurvey()?.map((dataItem) => {
                      let { name, linkCode} = dataItem;
                      console.log("name: " + name);


                      return (
                        <tr key={name}>
                          <td>
                            <Link
                              to={`/help/${linkCode}`}
                              style={{
                                display: 'block',
                                width: '100%',
                                color: 'inherit',
                              }}
                            >
                              {name}
                            </Link>
                          </td>

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HelpList;