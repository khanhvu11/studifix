import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dropdown({getValue, lang, obj, _key}) {
    var select = (e) => {
        var option = e.target.value
        getValue(_key, option)
    }

    return (
        /* Object.keys(scholarship).map((key,id) => (obj && Array.isArray(scholarship_cat.value)  && scholarship_cat.value.length>1)?*/
        <div className='inputElement'>
            {/* <label className="col-sm-2 col-form-label" htmlFor={obj.title[lang]}>{obj.title[lang]}</label>  */}
            <p>{obj.description[lang]}</p>
            <div  className="">
            <select style={{textAlignLast: 'center'}} className="form-control insideElement" name={obj.title[lang]} id={obj.title[lang]} onChange={select}>
                <option value="none" selected disabled hidden>
                    {obj.title[lang] + ' - Bitte wählen Sie'}
                </option>
                {obj.values.map((val,id) => <option value={val._id} key={val._id} >{val.title[lang]}</option>)}
            </select>
            </div>
        </div>
    )
}
