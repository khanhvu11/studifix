import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons';

export default function TextInput({obj, _key, getValue, lang}) {

    var handleChange = (event) => {
        getValue(_key, event.target.value)
    }

/*     useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            buttonFunc(false, value)
          }, 3000)
      
        return () => clearTimeout(delayDebounceFn)
    },[value]) */

    return (
        <div className="inputElement">
            {/* <label htlmfor={_key} className="col-sm-2 col-form-label">{obj.localization && obj.localization.title.DE}</label> */}
            {/* {(_key === 'adresse')?(
                Object.keys(obj.value).map(key => 
                <div style={{margin: '1rem'}} className="col-sm-10">
                    <input type="text" className="form-control" id={key} placeholder={obj.value[key].localization && obj.value[key].localization.title.DE} onChangeCapture={handleChange}/>
                </div>
                )
            ):( */}
            {/* <h2>{obj.description[lang]+' '} 
                <OverlayTrigger
                    key={obj.descriptionDetail[lang]}
                    placement={'top'}
                    overlay={
                        <Tooltip id={`tooltip-${'top'}`}>
                            <strong>{obj.descriptionDetail[lang]}</strong>.
                        </Tooltip>
                    }
                    >
                    <FontAwesomeIcon style={{color:'#1170fe'}} icon={faQuestionCircle} />
                </OverlayTrigger>
            </h2>
            <h3>{obj.subline && obj.subline[lang]}</h3> */}
            <div className="">
                {/* <label className="col-sm-2 col-form-label" htmlFor={obj.title[lang]}>{obj.title[lang]}</label>  */}
                <input type="text" className="form-control insideElement" id={_key} placeholder={obj && obj.title[lang]} onChange={handleChange} required/>
            </div>
        </div>
        )
}
