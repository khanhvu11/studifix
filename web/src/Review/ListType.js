import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListType({scholarship_cat, _key}) {
    const lang = 'DE'

    var iterateArray = (value) => {
        return value.map((val,id) => (val !== null && val.title) ?<p key={id} >{val.title[lang]}</p>:<p key={id} >{val}</p>)
    }

    var notArrayValue = (category, key) => {
        if(key ==='link'){
          return <a href={category.value}>{category.value}</a>
        }else{
          switch(category.value){
              case null: return <p></p>
              case true: return <p></p>
              case false: return <p></p>
              default: return <p>{category.value}</p>
          }
        }
      }

    return (
        (scholarship_cat.localization)? 
        <div className="row">
                <div className="col-sm-2 col-form-label">{scholarship_cat.localization.title.DE}</div>
                <div className="col-sm-10">
                {(Array.isArray(scholarship_cat.value))? iterateArray(scholarship_cat.value):(typeof scholarship_cat.value !=='object' ||  scholarship_cat.value === null)? notArrayValue(scholarship_cat, _key):(scholarship_cat.value.title && <p>{scholarship_cat.value.title.DE}</p>)||<p>{scholarship_cat.value.name}</p>}
                </div>
            </div>:null
    )
}
