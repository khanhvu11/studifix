import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//import TextArea from './TextArea'
import './Filter.css';
import Options from './Options';
import Dropdown from './Dropdown';


function Filter({ cls, labels, func, lang, obj, selectionData, userSelection }) {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';
  const [result, setResult] = useState({});
  const history = useHistory();
  const removedKeyList = ['provider', 'link', 'advancement', 'advancementDetail', 'advancementTime', 'city', 'country']

  var getNextkey = (currentKey) => {
    var existKeys = labels.filter((key) =>
      key !== null && !removedKeyList.includes(key) ? key : null
    );
    existKeys.push('submit');
    var ind = existKeys.indexOf(currentKey);
    func(existKeys[ind + 1]);
  };

  var getALlResult = (key, optionList) => {
    if (optionList.length > 0) {
      result[key] = optionList;
    } else {
      result[key] = null;
    }
    setResult(result);
  };

  console.log(result);

  var toReview = () => {
    history.push({
      pathname: '/review',
      state: {scholarship : result,
      userSelection: userSelection},
    });
  }

  return (
    <div className="filter">
      <div className="options">
        {Object.keys(obj).map((key, id) => {
          var item = obj[key];
          return (
            (!removedKeyList.includes(key))?<Options
              func={getALlResult}
              key={id}
              _key={key}
              cls={cls}
              lang={lang}
              obj={item}
              selectionData = {selectionData}
            />:null
          )
        })}
        <button
          type="button"
          className={cls !== 'submit' ? 'nextCateBtn' : 'hideNext'}
          onClick={() => getNextkey(cls)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      {/* " btn btn-primary btn-lg" */}
      <button
        type="button"
        className={'submit' === cls ? 'sub-active' : ' sub1'}
        onClick={toReview}
      >
        Überprüfen
      </button>
    </div>
  );
}

export default Filter;
