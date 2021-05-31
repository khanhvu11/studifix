import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown({scholarship_cat, _key, multiselect}) {
    /* console.log(scholarship_cat) */
    const lang = 'DE'
    var iterateArray = (value) => {
        return value.map((val,id) => <option value={val.title[lang]} key={val._id} >{val.title[lang]}</option>)
    }

    return (
        /* Object.keys(scholarship).map((key,id) => (scholarship_cat.localization && Array.isArray(scholarship_cat.value)  && scholarship_cat.value.length>1)?*/
        <div className='drdn form-group row'>
            <label className="col-sm-2 col-form-label" htmlFor={scholarship_cat.localization.title[lang]}>{scholarship_cat.localization.title[lang]}</label> 
            <p>{scholarship_cat.localization.description[lang]}</p>
            <div  className="col-sm-10">
            <select className="form-control" name={scholarship_cat.localization.title[lang]} id={scholarship_cat.localization.title[lang]} multiple={multiselect}>
                {iterateArray(scholarship_cat.value)}
            </select>
            {multiselect?'press Ctrl to select multiple options':null}
            </div>
        </div>
    )
}
