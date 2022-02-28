import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { Link } from 'react-router-dom';

const ManageSurveyList = () => {
  const url = '/api/survey';
  const { data } = useFetch(url);

  return (
    <div className='table-responsive'>
      <table className='table table-bordered table-hover' id='dataTable' width='100%'>
        <thead className='table-light text-dark'>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>Title</th>
            <th>Created</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dataItem) => {
            let { surveyId, surveyUrl, title, creationDate, lastUpdateDate } = dataItem;

            return (
              <tr key={surveyId}>
                <td>
                  <Link
                    to={`/admin-menu/survey/edit-survey/${surveyUrl}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {surveyId}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/survey/edit-survey/${surveyUrl}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {surveyUrl}
                  </Link>
                </td>
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
                <td>
                  <Link
                    to={`/admin-menu/survey/edit-survey/${surveyUrl}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {creationDate}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/survey/edit-survey/${surveyUrl}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {lastUpdateDate}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSurveyList;
