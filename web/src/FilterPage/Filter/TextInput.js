import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

export default function TextInput({func, _key, cls, lang, obj}) {

    const [value, setValue] = useState('')
    var handleChange = (event) => {
        if(obj.values ==='integer'){
            setValue(parseInt(event.target.value))
        }else if(obj.values ==='double'){
            setValue(parseFloat(event.target.value))
        }else{
            setValue(event.target.value)
        }
        /* func( event.target.value) */
        /* buttonFunc(false, value) */
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            var option = (value === '')?null:value
            func(_key, option)
          }, 3000)
      
        return () => clearTimeout(delayDebounceFn)
        /* return () => buttonFunc(false, value) */
    },[value, _key])

    return (
        <>
        {obj.title && obj.description &&
        <div className={(obj.title[lang]===cls)?"active":null + "form-group row dropdown"}>
            {
                obj.mandatory ? "*": ""
            }
            <h2>{obj.description[lang]+' '} 
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
            <h3>{obj.subline[lang]}</h3>
            <div className="col-sm-10">
                <input type="text" className="form-control insideElement" id={_key} placeholder={obj.title[lang]} onChange={handleChange}/>
            </div>
        </div>
        }
        </>
        )
}
