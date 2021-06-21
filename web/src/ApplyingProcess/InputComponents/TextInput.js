import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function TextInput({obj, _key, getValue, lang}) {

    var handleChange = (event) => {
        getValue(_key, event.target.value)
    }

/*     useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            buttonFunc(false, value)
          }, 3000)
      
        return () => clearTimeout(delayDebounceFn)
    },[value]) */

    return (
        <div className="inputElement">
            {/* <label htlmfor={_key} className="col-sm-2 col-form-label">{obj.localization && obj.localization.title.DE}</label> */}
            {/* {(_key === 'adresse')?(
                Object.keys(obj.value).map(key => 
                <div style={{margin: '1rem'}} className="col-sm-10">
                    <input type="text" className="form-control" id={key} placeholder={obj.value[key].localization && obj.value[key].localization.title.DE} onChangeCapture={handleChange}/>
                </div>
                )
            ):( */}
            <div className="">
                {/* <label className="col-sm-2 col-form-label" htmlFor={obj.title[lang]}>{obj.title[lang]}</label>  */}
                <input type="text" className="form-control insideElement" id={_key} placeholder={obj && obj.title[lang]} onChange={handleChange}/>
            </div>
        </div>
        )
}
