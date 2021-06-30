import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons';

import { useState, useEffect } from 'react';

export default function YesNo({func, _key, cls, lang, obj}) {

    const [isYes, setIsYes] = useState(false)

    useEffect(() => {
        if(isYes){
            func(_key, true) 
        }else{
            func(_key, false)
        }
    }, [isYes])

    //to set isYes to true or false
    function select(){
        setIsYes(!isYes)
    }

    return (
        <div className={(obj.title[lang]===cls)? 'mplChoice active': 'mplChoice'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {/* {
                !obj.mandatory ? "*": ""

            } */}
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
            <div className="button-grid">
                <button type="button"  className={(isYes? "chosen ":"" )+ "choice"} onClick={select}>
                    <p>Ja</p>
                </button>
                <button type="button"  className={(!isYes? "chosen ":"" )+ "choice"} onClick={select}>
                    <p>Nein</p>
                </button>
            </div>
        </div>
    )
}
