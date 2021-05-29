import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TextInput({scholarship_cat, _key}) {
    return (
        <div className="form-group row">
            <label htlmfor={_key} class="col-sm-2 col-form-label">{scholarship_cat.localization.title.DE}</label>
            <div class="col-sm-10">
                <input type="text" className="form-control" id={_key} placeholder={scholarship_cat.localization.title.DE}/>
            </div>
        </div>
        )
}
