import React, {useState} from 'react'

//import TextArea from './TextArea'
import './Filter.css'
import Options from './Options'

function Filter({func, cls, lang, obj}) {
  const [result, setResult] = useState({})

  var getALlResult = (id, optionList)=> {
        result[id] = optionList
        setResult(result)
    }

    console.log(result)

  return (
    <div className="filter">
      <div className="options">
        {Object.keys(obj).map((key,id)=> {
        var item = obj[key]
        return(<Options func={getALlResult} key={id} cls={cls} lang={lang} obj={item}/>)}
      )}
      </div>
      <button type='submit' className={(("submit"===cls)? 'sub-active': ' sub1') + " btn btn-primary btn-lg"}>Submit</button>
    </div>
  )
}

export default Filter;
