import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown({scholarship_cat, _key}) {
    /* console.log(scholarship_cat) */
    const lang = 'DE'
    var iterateArray = (value) => {
        return value.map((val,id) => <option value={val.title[lang]} key={val._id} >{val.title[lang]}</option>)
    }

    var notArrayValue = (category, key) => {
        if(key ==='link'){
          return <a href={category.value}>{category.value}</a>
        }else{
          switch(category.value){
              case null: return <p>Keine Beschränkung</p>
              case true: return <p>Ja</p>
              case false: return <p>Nein</p>
              default: return <p>{category.value}</p>
          }
        }
      }

    return (
        /* Object.keys(scholarship).map((key,id) => */(scholarship_cat.localization && Array.isArray(scholarship_cat.value) && scholarship_cat.value.length>1)?
        <div className='form-group drdn'>
            <label htmlFor={scholarship_cat.localization.title[lang]}><h3>{scholarship_cat.localization.title[lang]}</h3></label> 
            <p>{scholarship_cat.localization.description[lang]}</p>
            <select className="form-control" name={scholarship_cat.localization.title[lang]} id={scholarship_cat.localization.title[lang]}>
                {iterateArray(scholarship_cat.value)}
            </select>
        </div>:(scholarship_cat.localization)? <ul>
                <li><h3>{scholarship_cat.localization.title.DE}</h3></li>
                {(Array.isArray(scholarship_cat.value))? iterateArray(scholarship_cat.value):(typeof scholarship_cat.value !=='object' ||  scholarship_cat.value === null)? notArrayValue(scholarship_cat, _key):(scholarship_cat.value.title && <p>{scholarship_cat.value.title.DE}</p>)||<p>{scholarship_cat.value.name}</p>}
            </ul>:null
    )
}
