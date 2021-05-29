import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserSelection({usr_selection}) {
    const lang = 'DE'
    var iterateArray = (value) => {
        return value.map((val,id) => <p key={val._id} >{val.title[lang]}</p>)
    }
    
    return (
        Object.keys(usr_selection).map((key, id) =>/* (Array.isArray(usr_selection[key].value))? */
        <div key ={id} className='form-group drdn'>
            <label htmlFor={usr_selection[key].title[lang]}><h3>{usr_selection[key].title[lang]}</h3></label> 
            {/* <p>{usr_selection[key].description[lang]}</p> */}
                {iterateArray(usr_selection[key].values)}
        </div>)
    )
}
