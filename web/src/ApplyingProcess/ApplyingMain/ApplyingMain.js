import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import personalInfo from '../personalInfo';

//import TextArea from './TextArea'
import './Filter.css';
import InputGroup from './InputGroup';
import groupObject from './groupData';
import Error from '../NotificationComponents/Error';
import Success from '../NotificationComponents/Success';
import Welcome from '../NotificationComponents/Welcome';
/* import Dropdown from './Dropdown'; */

function ApplyingMain(props) {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';
  const [result, setResult] = useState({});
  const history = useHistory();
  const [error, setError] = useState('');

  // to show the next group 
  var getNextkey = (currentKey) => {
    var existKeys = [...props.groupNameList, 'submit'];
    var ind = existKeys.indexOf(currentKey);
    props.setGroupName(existKeys[ind + 1]);
  };

  // get inputs of user
  var getALlResult = (key, value) => {
    result[key] = value;

    setResult(result);
  };

  console.log(result);
  
  // to review page
  var toReview = () => {
    fetch(URL + '/api/application', {
      method: 'POST',
      body: JSON.stringify({
        scholarship: props.scholarshipId,
        filterData: props.user_selection,
        applicationData: result,
      }),
      headers: { 'Content-type': 'application/json' },
    })
      .then(async (response) => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json');
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        props.setGroupName('success')
        
        /* history.push({
          pathname: '/',
          state: { scholarships: data },
        }); */
        /* response.json() */
      })
      /* .then(json => setScholarships(json)) */
      .catch((error) => {
        setError(error);
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="filter">
      {error && 'submit' === props.groupName ? <Error error={error} /> : null}
      <div className="options">
        <Welcome currentGrN ={props.groupName}></Welcome>
        {Object.keys(groupObject).map((groupName, id) => {
          var memberList = groupObject[groupName];
          return (
            props.data && (
              <InputGroup
                memberList={memberList}
                groupName={groupName}
                currentGrN={props.groupName}
                setGroupName={props._setGroupName}
                lang={props.lang}
                data={props.data}
                getValue={getALlResult}
              />
            )
          );
        })}
        <Success currentGrN ={props.groupName}></Success>
        <button
          type="button"
          className={props.groupName !== 'submit' && props.groupName !== 'success' ? 'nextCateBtn' : 'hideNext'}
          onClick={() => getNextkey(props.groupName)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      {/* " btn btn-primary btn-lg" */}
      <button
        type="button"
        className={'submit' === props.groupName ? 'sub-active' : ' sub1'}
        onClick={toReview}
      >
        Bewerbung schicken
      </button>
    </div>
  );
}

export default ApplyingMain;
