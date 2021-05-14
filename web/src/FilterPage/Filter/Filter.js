import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//import TextArea from './TextArea'
import './Filter.css';
import Options from './Options';
import Dropdown from './Dropdown';

function Filter({ cls, lang, obj }) {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';
  const [result, setResult] = useState({});
  const history = useHistory();

  var getALlResult = (key, optionList) => {
    if (optionList.length > 0) {
      result[key] = optionList;
    } else {
      result[key] = null;
    }
    setResult(result);
  };

  console.log(result);

  var sendFilter = () => {
    /* Object.keys(obj).forEach(key => {
      if(!Object.keys(result).includes(key)){
        result[key] = null
        setResult(result)
      }
    }) */
    console.log(JSON.stringify(result));

    // fetch('http://studifix.mi.hdm-stuttgart.de/api/data/filter/scholarships', {
    fetch(URL + '/api/data/filter/scholarships', {
      method: 'POST',
      body: JSON.stringify({ selectionData: result }),
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
        history.push({
          pathname: '/scholarshipsPage',
          state: data,
        });
        /* response.json() */
      })
      /* .then(json => setScholarships(json)) */
      .catch((error) => console.error('There was an error!', error));
  };

  return (
    <div className="filter">
      <div className="options">
        {Object.keys(obj).map((key, id) => {
          var item = obj[key];
          return key !== 'city' ? (
            <Options
              func={getALlResult}
              key={id}
              _key={key}
              cls={cls}
              lang={lang}
              obj={item}
            />
          ) : (
            <Dropdown
              func={getALlResult}
              key={id}
              _key={key}
              cls={cls}
              lang={lang}
              obj={item}
            />
          );
        })}
      </div>
      {/* " btn btn-primary btn-lg" */}
      <button
        type="button"
        className={'submit' === cls ? 'sub-active' : ' sub1'}
        onClick={sendFilter}
      >
        Submit
      </button>
    </div>
  );
}

export default Filter;
