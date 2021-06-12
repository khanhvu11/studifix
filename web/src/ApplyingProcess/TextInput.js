import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

export default function TextInput({scholarship_cat, _key, buttonFunc}) {

    const [value, setValue] = useState('')
    var handleChange = (event) => {
        setValue( event.target.value)
        buttonFunc(false, event.target.value)
    }

    /* useEffect(() => {
        return () => buttonFunc(false, value)
    },[]) */

    return (
        <div className="form-group row">
            {/* <label htlmfor={_key} className="col-sm-2 col-form-label">{scholarship_cat.localization && scholarship_cat.localization.title.DE}</label> */}
            {/* {(_key === 'adresse')?(
                Object.keys(scholarship_cat.value).map(key => 
                <div style={{margin: '1rem'}} className="col-sm-10">
                    <input type="text" className="form-control" id={key} placeholder={scholarship_cat.value[key].localization && scholarship_cat.value[key].localization.title.DE} onChangeCapture={handleChange}/>
                </div>
                )
            ):( */}
            <div className="col-sm-10">
                <input type="text" className="form-control" id={_key} placeholder={scholarship_cat.localization && scholarship_cat.localization.title.DE} onChange={handleChange}/>
            </div>
        </div>
        )
}
