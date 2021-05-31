import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserSelection({usr_selection}) {
    const lang = 'DE'
    var iterateArray = (value) => {
        return value.map((val,id) => <p key={val._id} >{val.title[lang]}</p>)
    }
    
    return (
        Object.keys(usr_selection).map((key, id) =>/* (Array.isArray(usr_selection[key].value))? */
        <div key ={id} className='row'>
            <div className="col-sm-2 col-form-label">{usr_selection[key].title[lang]}</div>
            <div class="col-sm-10">
            {/* <p>{usr_selection[key].description[lang]}</p> */}
                {iterateArray(usr_selection[key].values)}
                </div>
        </div>)
    )
}
