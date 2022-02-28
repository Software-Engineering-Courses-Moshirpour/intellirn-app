import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { Link } from 'react-router-dom';

const SurveyList = () => {
  const url = '/api/survey';
  const { data } = useFetch(url);

  return (
    <div className='table-responsive'>
      <table className='table table-hover' id='dataTable' width='100%'>
        <tbody>
          {data?.map((dataItem) => {
            let { title, surveyUrl } = dataItem;

            return (
              <tr key={title}>
                <td>
                  <Link
                    to={`/survey/${surveyUrl}`}
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
  );
};

export default SurveyList;
