import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown({func, _key, cls, lang, obj}) {
    /* const lang = lang
 */
    var select = (e) => {
        var option = e.target.value
        func(_key, option)
    }

    return (
        <>
        {obj.title && obj.mandatory && obj.description &&
        <div className={(obj.title[lang]===cls)? 'dropdown active form-group': 'form-group dropdown'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {
                obj.mandatory ? "*": ""
            }
            <p>{obj.description[lang]}</p>
            <select className="select" name={obj.title[lang]} id={obj.title[lang]} onChange={select}>
                {obj.values && obj.values.map(value => <option value={value._id} key={value._id}>{value.title[lang]}</option>)}
            </select>
        </div>
}
        </>
    )
}
