import React from 'react';

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

  let formattedDate = [year, month, day].join('-');
  let formattedTime = [hour, minutes, seconds].join(':');

  return { formattedDate, formattedTime };
}

const ContactUsDetailsCard = ({ data }) => {
  const { formattedDate, formattedTime } = split_date_time(data['timeReceived']);

  return (
    <div className='table-responsive'>
      <table className='table table-borderless table-hover' width='100%'>
        <tbody>
          <tr>
            <th style={{ width: '30%' }}>Message ID</th>
            <td>{data['contactUsId']}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Receive date</th>
            <td>{formattedDate}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Receive time</th>
            <td>{formattedTime}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Sender's name</th>
            <td>{data['name']}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Sender's email</th>
            <td>{data['email']}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Subject</th>
            <td>{data['subject']}</td>
          </tr>
          <tr>
            <th style={{ width: '30%' }}>Message</th>
            <td>{data['message']}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsDetailsCard;
