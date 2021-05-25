import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown({scholarship}) {
    const lang = 'DE'
    var iterateArray = (value) => {
        return value.map((val,id) => <option value={val.title[lang]} key={val._id} >{val.title[lang]}</option>)
    }

    return (
        Object.keys(scholarship).map(key =>(scholarship[key].localization && Array.isArray(scholarship[key].value))?
        <div className='form-group drdn'>
            <label htmlFor={scholarship[key].localization.title[lang]}><h3>{scholarship[key].localization.title[lang]}</h3></label> 
            <p>{scholarship[key].localization.description[lang]}</p>
            <select class="form-control" name={scholarship[key].localization.title[lang]} id={scholarship[key].localization.title[lang]}>
                {iterateArray(scholarship[key].value)}
            </select>
        </div>:null)
    )
}
