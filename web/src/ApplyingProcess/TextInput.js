import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextInput({scholarship_cat, _key, buttonFunc}) {

    const [textValue, setTextValue] = useState('')

    var handleChange = (event) => {
        buttonFunc(false, event.target.value)
    }

    console.log(textValue)

    return (
        <div className="form-group row">
            {/* <label htlmfor={_key} className="col-sm-2 col-form-label">{scholarship_cat.localization && scholarship_cat.localization.title.DE}</label> */}
            <div className="col-sm-10">
                <input type="text" className="form-control" id={_key} placeholder={scholarship_cat.localization && scholarship_cat.localization.title.DE} onChange={handleChange}/>
            </div>
        </div>
        )
}
