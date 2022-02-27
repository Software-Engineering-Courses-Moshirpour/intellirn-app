import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { Link } from 'react-router-dom';

const ManageSurveyList = () => {
  const url = '/api/survey';
  const { data } = useFetch(url);

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
                  {data?.map((dataItem) => {
                    let { title, surveyUrl } = dataItem;
                    console.log('name: ' + title);

                    return (
                      <tr key={title}>
                        <td>
                          <Link
                            to={`/admin-menu/survey/edit-survey/${surveyUrl}`}
                            style={{
                              display: 'block',
                              width: '100%',
                              color: 'inherit',
                            }}
                          >
                            {title}
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

export default ManageSurveyList;
