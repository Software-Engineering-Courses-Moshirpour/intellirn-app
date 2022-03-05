import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { deleteCall } from '../helpers/deleteCall';
import { Link } from 'react-router-dom';

function split_date_time(timeReceived) {
  let receivedDateTime = new Date(timeReceived);

  let month = '' + (receivedDateTime.getMonth() + 1);
  let day = '' + receivedDateTime.getDate();
  let year = receivedDateTime.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  let hour = '' + receivedDateTime.getHours();
  let minutes = '' + receivedDateTime.getMinutes();
  let seconds = '' + receivedDateTime.getSeconds();
  if (hour.length < 2) hour = '0' + hour;
  if (minutes.length < 2) minutes = '0' + minutes;
  if (seconds.length < 2) seconds = '0' + seconds;

  const formattedDateTime = [year, month, day].join('-') + ' ' + [hour, minutes, seconds].join(':');
  return formattedDateTime;
}

const ManageContactUsList = () => {
  const url = '/api/contactus';
  const { data } = useFetch(url);

  function handleMessageDelete(e) {
    const idOfMessage = e.target.parentElement.parentElement.id;
    const deleteContactEndpoint = `${url}/${idOfMessage}`;

    deleteCall(deleteContactEndpoint).then((result) => {
      window.alert(result['data']['message']);

      if (result['status'] == 200) {
        window.location.reload(false);
      }
    });
  }

  return (
    <div className='table-responsive'>
      <table className='table table-bordered table-hover' id='dataTable' width='100%'>
        <thead className='table-light text-dark'>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((dataItem) => {
            let { contactUsId, timeReceived, name, email, subject, read } = dataItem;

            const fomattedTimeReceived = split_date_time(timeReceived);

            return (
              <tr key={contactUsId} id={contactUsId} className={read === false ? 'text-success' : ''}>
                <td>
                  <Link
                    to={`/admin-menu/contactus/${contactUsId}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {contactUsId}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/contactus/${contactUsId}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/contactus/${contactUsId}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {email}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/contactus/${contactUsId}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {subject}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/admin-menu/contactus/${contactUsId}`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {fomattedTimeReceived}
                  </Link>
                </td>
                <td>
                  <i className='bi bi-trash2-fill' style={{ cursor: 'pointer' }} onClick={handleMessageDelete}></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageContactUsList;
