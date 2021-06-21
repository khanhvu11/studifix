import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import personalInfo from '../personalInfo'

//import TextArea from './TextArea'
import './Filter.css';
import InputGroup from './InputGroup';
import groupObject from './groupData';
/* import Dropdown from './Dropdown'; */


function Filter(props) {
  /* const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost'; */
  const [result, setResult] = useState({});
  const history = useHistory();
  const removedKeyList = ['provider', 'link', 'advancement', 'advancementDetail', 'advancementTime', 'city', 'country']

  var getNextkey = (currentKey) => {
    var existKeys = [...props.groupNameList, 'submit']
    /* labels.filter((key) =>
      key !== null && !removedKeyList.includes(key) ? key : null
    ); */
   /*  existKeys.push('submit'); */
    var ind = existKeys.indexOf(currentKey);
    props.setGroupName(existKeys[ind + 1]);
  };

  var getALlResult = (key, value) => {

      result[key] = value;
  
    setResult(result);
  };

  console.log(result)

  var toReview = () => {
    history.push({
      pathname: '/review',
      state: {
       /*  scholarship : scholarship,
        completedForm: result,
        userSelection: userSelection */
      },
    });
  }

  return (
    <div className="filter">
      <div className="options">
        {Object.keys(groupObject).map((groupName, id) => {
          var memberList = groupObject[groupName];
          return (
            props.data && <InputGroup
              memberList = {memberList}
              groupName={groupName}
              currentGrN = {props.groupName} 
              setGroupName={props._setGroupName} 
              lang={props.lang} 
              data = {props.data}
              getValue = {getALlResult}
            />
          )
        })}
        <button
          type="button"
          className={props.groupName !== 'submit' ? 'nextCateBtn' : 'hideNext'}
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

export default Filter;
