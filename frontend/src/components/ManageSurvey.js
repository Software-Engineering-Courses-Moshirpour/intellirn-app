import React from 'react';
import { useState } from 'react';
import { getSurvey } from './../services/fakeSurveyServices';

const ManageSurvey = () => {
  const [cart, setCart] = useState(getSurvey()[0]['questions']);
  const [surveyname, setSurveyName] = useState(getSurvey()[0]['name']);
  const [cid, setCid] = useState(cart.length + 1);
  const [btnName, setBtnName] = useState('Add');

  const [details, setDetails] = useState({
    id: '',
    stem: '',
    content: '',
    imageurl: '',
    uid: '',
  });

  const handleAddUpdate = (e) => {
    let newCart = cart;

    if (btnName != 'Update') {
      newCart.push({
        id: cart.length + 1,
        stem: details['stem'],
        content: details['content'],
        imageurl: details['imageurl'],
        uid: details['uid'],
      });
      setCid(cart.length + 1);
    } else {
      for (var i = 0; i < newCart.length; i++) {
        if (newCart[i]['id'] == cid) {
          console.log('update target found');
          newCart[i]['stem'] = details['stem'];
          newCart[i]['content'] = details['content'];
          newCart[i]['imageurl'] = details['imageurl'];
          newCart[i]['uid'] = details['uid'];

          setCart([...newCart]);
        }
      }
      console.log(cart);
      setCid(cart.length + 1);
    }

    setDetails({
      id: '',
      stem: '',
      content: '',
      imageurl: '',
      uid: '',
    });

    setBtnName('Add');
  };

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele['id'] != value;
    });
  }

  const handleUpdate = (e) => {
    let newCart = cart;
    let tempDetails = details;
    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      if (newCart[i]['id'] == e.target.value) {
        tempDetails['id'] = newCart[i]['id'];
        tempDetails['stem'] = newCart[i]['stem'];
        tempDetails['content'] = newCart[i]['content'];
        tempDetails['imageurl'] = newCart[i]['imageurl'];
        tempDetails['uid'] = newCart[i]['uid'];
        setCid(tempDetails['id']);
        setDetails(tempDetails);
        setBtnName('Update');
      }
    }
  };

  const handleDel = (e) => {
    let newCart = cart;
    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      if (newCart[i]['id'] == e.target.value) {
        newCart = arrayRemove(newCart, newCart[i]['id']);
      }
    }

    for (var i = 0; i < newCart.length; i++) {
      console.log(e.target.value);

      newCart[i]['id'] = i + 1;
    }
    setCart([...newCart]);

    setCid(newCart.length + 1);
    console.log(cart);
  };

  const handleSubmit = (e) => {
    console.log(cart);
  };

  const handleDeleteSurvey = (e) => {
    console.log('Deletes this Survey');
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
                    value={details['imageurl']}
                    onChange={(e) => {
                      setDetails({ ...details, imageurl: e.target.value });
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
                    let { id, stem, content, imageurl, uid } = dataItem;

                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <th>{content}</th>
                        <th>{uid}</th>
                        <td>
                          <button onClick={(e) => handleUpdate(e)} value={id} className='btn btn-alert btn-sm'>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={(e) => handleDel(e)} value={id} className='btn btn-alert btn-sm'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button onClick={(e) => handleSubmit(e)} className='btn btn-primary btn-md'>
                Finish
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
