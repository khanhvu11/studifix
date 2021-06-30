import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//import TextArea from './TextArea'
import './Filter.css';
import Options from './Options';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import YesNo from './YesNo';
import Error from '../../ApplyingProcess/NotificationComponents/Error';

function Filter({ cls, labels, func, lang, obj }) {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';
  const varTypeList = ['integer', 'double']

  // result: what user chose in filter process
  const [result, setResult] = useState({});
  const history = useHistory();
  const [error, setError] = useState('');

  // function for showing next category
  var getNextkey = (currentKey) => {
    // get array of labels
    var existKeys = labels.filter((key) =>
      key !== null && key !== 'Stadt' && key !== 'Land' ? key : null
    );
    existKeys.push('submit');
    var ind = existKeys.indexOf(currentKey);
    // send next label to be shown to patent component (filterPage)
    func(existKeys[ind + 1]);
  };

  // get chosen options from child components
  var getALlResult = (key, optionList) => {
    if(Array.isArray(optionList)){
      if (optionList.length > 0) {
        result[key] = optionList;
      } else {
        result[key] = null;
      }
    }else{
      result[key] = optionList;
    }
    setResult(result);
  };

  console.log(result);

  // send result to backend to receive the suitable scholarships
  var sendFilter = () => {
    var error = false

    Object.keys(obj).forEach(key => {
        if(key !== '_id' && !Object.keys(result).includes(key)){
          result[key] = null
          setResult(result)
        }
    }) 

    const notCheckList = ['_id', 'collegeGrade', 'jobGrade', 'uniGrade']

    Object.keys(obj).forEach(key => {
      if(!notCheckList.includes(key) && !Array.isArray(obj[key].values)){
        /* var comparedValue = ''
        switch(obj[key].values){
          case 'integer': comparedValue = 'number'
          case 'double' : comparedValue =  'number'
          case 'boolean': comparedValue = 'boolean'
        } */
        var value = result[key]
        console.log(key)
        console.log(value)
        if(/* result[key] === null || */ isNaN(value)){
          console.log('error')
          error = true
          setError(`${obj[key].title[lang]} muss der Typ ${obj[key].values} sein`)
        }
      }
    }) 
  
    console.log(JSON.stringify(result));

    // fetch('http://studifix.mi.hdm-stuttgart.de/api/data/filter/scholarships', {
      if(!error){
        fetch(URL + '/api/data/filter/scholarships', {
          method: 'POST',
          body: JSON.stringify({ filterData: result }),
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
              state: {scholarships : data, 
                selection : result},
            });
            /* response.json() */
          })
          /* .then(json => setScholarships(json)) */
          .catch((error) => {
            setError(error);
            console.error('There was an error!', error)
          });
    }
  };

  return (
    <div className="filter">
      {error ? <Error error={error} /> : null}
      <div className="options">
        {Object.keys(obj).map((key, id) => {
          var item = obj[key];
          if(varTypeList.includes(item.values)){
            return <TextInput 
                    func={getALlResult}
                    key={id}
                    _key={key}
                    cls={cls}
                    lang={lang}
                    obj={item}
                    />
          }else if(item.values==='boolean'){
            return <YesNo 
                    func={getALlResult}
                    key={id}
                    _key={key}
                    cls={cls}
                    lang={lang}
                    obj={item}
                    />
          }else{
            return key !== 'city' ? (
            <Options
              func={getALlResult}
              key={id}
              _key={key}
              cls={cls}
              lang={lang}
              obj={item}
              result = {result}
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
          }
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
        onClick={sendFilter}
      >
        Weiter zu den passenden Angeboten
      </button>
    </div>
  );
}

export default Filter;
