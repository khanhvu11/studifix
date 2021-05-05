import React, {useState} from 'react'

//import TextArea from './TextArea'
import './Filter.css'
import Options from './Options'
import Dropdown from './Dropdown'

function Filter({func, cls, lang, obj}) {
  const [result, setResult] = useState({})

  var getALlResult = (id, optionList)=> {
    if(optionList.length > 0){
      result[id] = optionList
    }else{
      result[id] = null
    }
        setResult(result)
    }

    console.log(result)

  var sendFilter = () => {
    Object.keys(obj).forEach(key => {
      if(!Object.keys(result).includes(key)){
        result[key] = null
        setResult(result)
      }
    })
    console.log(result)

    fetch('http://localhost:4000/filter/scholarships', {
      method: "POST",
      body: JSON.stringify(result),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
    /* .catch(err => console.log(err)); */
  }

  return (
    <div className="filter">
      <div className="options">
        {Object.keys(obj).map((key,id)=> {
        var item = obj[key]
        return((key!=='city')?<Options func={getALlResult} key={id} _key={key} cls={cls} lang={lang} obj={item}/>:<Dropdown func={getALlResult} key={id} _key={key} cls={cls} lang={lang} obj={item}/>)}
      )}
      </div>
      {/* " btn btn-primary btn-lg" */}
      <button type='button' className={(("submit"===cls)? 'sub-active': ' sub1')} onClick={sendFilter}>Submit</button>
    </div>
  )
}

export default Filter;
