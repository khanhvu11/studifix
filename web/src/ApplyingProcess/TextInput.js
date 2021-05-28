import React from 'react'

export default function TextInput({scholarship_cat, _key}) {
    return (
        <div className="form-group">
            <label htlmfor={_key}>{scholarship_cat.localization.title.DE}</label>
            <input type="text" className="form-control" id={_key} placeholder={scholarship_cat.localization.title.DE}/>
        </div>
        )
}
