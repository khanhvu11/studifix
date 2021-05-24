import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown(props) {
    const lang = props.lang

    return (
        <div className={(props.obj.title[lang]===props.cls)? 'dropdown active form-group': 'form-group dropdown'}>
            <label className="label-sml" htmlFor={props.obj.title[lang]}>{props.obj.title[lang]} {/*
                props.obj.mandatory ? "*": ""
            */}</label> 
            {
                props.obj.mandatory ? "*": ""
            }
            <p>{props.obj.description[lang]}</p>
            <select class="form-control select" name={props.obj.title[lang]} id={props.obj.title[lang]}>
                {props.obj.values && props.obj.values.map(value => <option value={value.title[lang]} key={value._id} >{value.title[lang]}</option>)}
            </select>
        </div>
    )
}
