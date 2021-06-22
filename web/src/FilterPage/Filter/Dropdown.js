import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown({func, _key, cls, lang, obj}) {
    /* const lang = lang
 */
    var select = (e) => {
        var option = [e.target.value]
        func(_key, option)
    }

    return (
        <>
        {obj.title && obj.description &&
        <div className={(obj.title[lang]===cls)? 'dropdown active form-group': 'form-group dropdown'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
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
            <select className="select insideElement" name={obj.title[lang]} id={obj.title[lang]} onChange={select}>
                {obj.values && obj.values.map(value => <option value={value._id} key={value._id}>{value.title[lang]}</option>)}
            </select>
        </div>
}
        </>
    )
}
