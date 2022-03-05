import React from 'react';
import { useFetch } from '../helpers/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteCall } from './../helpers/deleteCall';
import { putCall } from './../helpers/putCall';

const ManageSurvey = () => {
  const url = '/api/survey?searchBy=surveyurl&searchTerm=';
  const { id } = useParams();
  let thisurl = url + id;
  const { loading, data } = useFetch(thisurl);
  const [cart, setCart] = useState([]);
  const [surveyname, setSurveyName] = useState('');
  const [cid, setCid] = useState(cart.length + 1);
  const [btnName, setBtnName] = useState('Add');
  let navigate = useNavigate();

  useEffect(() => {
    console.log('tryting to log some statement');
    console.log(data);
    if (data.length > 0) {
      console.log('data detected');
      setCart(data[0]['questionList']);
      setSurveyName(data[0]['title']);
    }
  }, [!loading]);

  const [details, setDetails] = useState({
    id: '',
    stem: '',
    content: '',
    nextUrl: '',
    uid: '',
  });

  const handleAddUpdate = (e) => {
    let newCart = cart;

    if (btnName != 'Update') {
      newCart.push({
        questionId: cart.length + 1,
        stem: details['stem'],
        content: details['content'],
        nextUrl: details['nextUrl'],
        uid: details['uid'],
      });
      setCid(cart.length + 1);
    } else {
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i]['questionId'] == cid) {
          console.log('update target found');
          newCart[i]['stem'] = details['stem'];
          newCart[i]['content'] = details['content'];
          newCart[i]['nextUrl'] = details['nextUrl'];
          newCart[i]['uid'] = details['uid'];

          setCart([...newCart]);
        }
      }
      console.log(cart);
      setCid(cart.length + 1);
    }

    setDetails({
      questionId: '',
      stem: '',
      content: '',
      nextUrl: '',
      uid: '',
    });

    setBtnName('Add');
  };

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele['questionId'] != value;
    });
  }

  const handleUpdate = (e) => {
    console.log('update clicked');
    let newCart = cart;
    let tempDetails = details;
    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      if (newCart[i]['questionId'] == e.target.value) {
        tempDetails['questionId'] = newCart[i]['questionId'];
        tempDetails['stem'] = newCart[i]['stem'];
        tempDetails['content'] = newCart[i]['content'];
        tempDetails['nextUrl'] = newCart[i]['nextUrl'];
        tempDetails['uid'] = newCart[i]['uid'];
        setCid(tempDetails['questionId']);
        setDetails(tempDetails);
        setBtnName('Update');
      }
    }
  };

  const handleDel = (e) => {
    let newCart = cart;
    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      if (newCart[i]['questionId'] == e.target.value) {
        newCart = arrayRemove(newCart, newCart[i]['questionId']);
      }
    }

    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      newCart[i]['questionId'] = i + 1;
    }
    setCart([...newCart]);

    setCid(newCart.length + 1);
    console.log(cart);
  };

  const handleSubmit = (e) => {
    console.log(surveyname);
    let surveryURL = surveyname.replace(/\s+/g, '-').toLowerCase();
    console.log(surveryURL);
    let modUrl = '/api/survey/' + data[0]['surveyId'];
    console.log(cart);
    let message = {
      surveyUrl: surveryURL,
      title: surveyname,
      description: '',
      imageUrl: '',
      questionList: cart,
    };

    putCall(surveryURL, message).then((result) => {
      window.alert(result['data']['message']);
    });
  };

  const handleDeleteSurvey = (e) => {
    let delUrl = '/api/survey/' + data[0]['surveyId'];
    console.log('Deletes this Survey: ' + delUrl);
    deleteCall(delUrl).then((result) => {
      window.alert(result['data']['message']);

      if (result['status'] == 200) {
        let path = `/admin-menu`;
        navigate(path);
      }
    });
  };

  return (
    <div className='row'>
      <div className='col-lg-5'>
        <div className='card shadow mb-4'>
          <div className='card-body'>
            <form id='questionForm' onSubmit={handleSubmit}>
              <div className='form-group row'>
                <label className='col-sm-8 col-form-label font-weight-bold' htmlFor='formQuestionItem'>
                  Add Question Item
                </label>
              </div>
              <div className='form-group row'>
                <label className='col-sm-4 col-form-label font-weight-bold' htmlFor='formItemId'>
                  ID
                </label>
                {cid}
              </div>
              <div className='form-group row'>
                <label className='col-sm-4 col-form-label font-weight-bold' htmlFor='formStem'>
                  Stem
                </label>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    className='form-control'
                    id='formStem'
                    name='formStem'
                    placeholder='A Kink is Found'
                    maxLength='250'
                    value={details['stem']}
                    onChange={(e) => {
                      setDetails({ ...details, stem: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-4 col-form-label font-weight-bold' htmlFor='formContent'>
                  Content
                </label>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    className='form-control'
                    id='formContent'
                    name='formContent'
                    placeholder='Contents from which the stem is clicked goes here'
                    maxLength='25000'
                    required
                    value={details['content']}
                    onChange={(e) => {
                      setDetails({ ...details, content: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-4 col-form-label font-weight-bold' htmlFor='formImgUrl'>
                  Img Url
                </label>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    className='form-control'
                    id='formImgUrl'
                    name='formImgUrl'
                    placeholder='health.com/hi.png'
                    maxLength='250'
                    value={details['nextUrl']}
                    onChange={(e) => {
                      setDetails({ ...details, nextUrl: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-4 col-form-label font-weight-bold' htmlFor='formUid'>
                  Upstream ID
                </label>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    className='form-control'
                    id='formUid'
                    name='formUid'
                    placeholder='5'
                    maxLength='3'
                    value={details['uid']}
                    onChange={(e) => {
                      setDetails({ ...details, uid: e.target.value });
                    }}
                  />
                </div>
              </div>

              <button type='submit' onClick={(e) => handleAddUpdate(e)} className='btn btn-primary my-2'>
                {btnName}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='col-lg-7'>
        <div className='card shadow mb-4'>
          <div className='card-body'>
            <h3>Survey Name</h3>

            <input
              type='text'
              className='form-control'
              id='formImgUrl'
              name='formImgUrl'
              placeholder='Name of Survey here'
              maxLength='250'
              value={surveyname}
              onChange={(e) => {
                setSurveyName(e.target.value);
              }}
            />
            <hr></hr>
            <div className='table-responsive'>
              <h3>Question List</h3>
              <table className='table table-bordered table-hover' id='dataTable' width='50%' cellSpacing='0'>
                <thead className='table-secondary text-dark'>
                  <tr>
                    <th>ID</th>
                    <th>Content</th>
                    <th>uID</th>
                    <th></th>

                    <th></th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Content</th>
                    <th>uID</th>
                    <th></th>

                    <th></th>
                  </tr>
                </tfoot>
                <tbody>
                  {cart.map((dataItem) => {
                    let { questionId, stem, content, nextUrl, uid } = dataItem;

                    return (
                      <tr key={questionId}>
                        <td>{questionId}</td>
                        <th>{content}</th>
                        <th>{uid}</th>
                        <td>
                          <button onClick={(e) => handleUpdate(e)} value={questionId} className='btn btn-alert btn-sm'>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={(e) => handleDel(e)} value={questionId} className='btn btn-alert btn-sm'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button onClick={(e) => handleSubmit(e)} className='btn btn-primary btn-md'>
                Finish Update
              </button>
              <button onClick={(e) => handleDeleteSurvey(e)} className='btn btn-danger btn-md'>
                Delete Survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSurvey;
