import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Checkbox({scholarship_cat, _key}) {
    return (
       /*  <div classNameName="form-group row">
           {/*  <label htlmfor={_key}>{scholarship_cat.localization.title.DE}</label>
            <input type="text" className="form-control" id={_key} placeholder={scholarship_cat.localization.title.DE}/> 
            <h3 htlmfor={_key}>{scholarship_cat.localization.title.DE}</h3>
            <input className="form-check-input" type="checkbox" value="" id={_key}/>
            <label className="form-check-label" htmlFor={_key}>
                {(typeof scholarship_cat.value !== 'boolean')?scholarship_cat.value:(scholarship_cat.value===true)?'ja':'nein'}
            </label>
        </div> */

         <div className="form-group row">
            <div className="col-sm-2">{scholarship_cat.localization.title.DE}</div>
            <div className="col-sm-10">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" htmlFor="gridCheck1">
                    {(typeof scholarship_cat.value !== 'boolean')?scholarship_cat.value:(scholarship_cat.value===true)?'ja':'nein'}
                </label>
            </div>
            </div>
        </div>
        )
}