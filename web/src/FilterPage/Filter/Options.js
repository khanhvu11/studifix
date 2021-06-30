import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle, faSolarPanel
  } from '@fortawesome/free-solid-svg-icons';

import OptionButton from './OptionButton'

export default function MultipleChoice({func, _key, cls, lang, obj, result}) {
    // get list of options corresponding to their category (_key)
    const [optionList, setOptionList]=useState([])
    // option that user don't want to choose anymore
    const [removedOption, setRemovedOption] = useState('')

    // add option to an array
    var getOption = (isChosen, option) => {
        var newList = [...optionList]
        if(!isChosen){
            if(!newList.includes(option)){
                newList = newList.concat(option)
            }

        } else {
            var index = newList.indexOf(option)
            newList.splice(index, 1)
        }

        // check if multiple option can be chosen in this category
        if(!obj.multiselect){
            // if true the option array can only contain 1 element, next chosen element will be removed and set to removedOption
            if(newList.length>1){
                setRemovedOption(newList[0])
                newList.splice(0, 1)
            }
            if(isChosen){
                setRemovedOption('')
            }
        }


        setOptionList(newList)    
        /* getCategory(obj.title[lang], newList)   */  
        func(_key, newList)
    }

    console.log(removedOption)

    return (
        <>
        {obj.title && obj.description &&
        <div className={(obj.title[lang]===cls)? 'mplChoice active': 'mplChoice'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {/* {
                !obj.mandatory ? "*": ""

            } */}
            <h2>{obj.description[lang]+' '} 
                <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                        <Tooltip id={'tooltip-top'}>
                            <strong>{obj.descriptionDetail[lang]}</strong>
                        </Tooltip>
                    }
                    >
                    <FontAwesomeIcon style={{color:'#1170fe'}} icon={faQuestionCircle} />
                </OverlayTrigger>
            </h2>
            <h3>{obj.subline[lang]}</h3>
            <div className="button-grid">
                { //pass values for buttons. Every button is an option
                    obj.values && obj.values.map((value,id) => {
                        if(result[obj.dependence]){
                            var a = result[obj.dependence]
                            console.log(a)
                            console.log(value.dependentOn)
                            if(value.dependentOn !== null && value.dependentOn.includes(a[0])){
                                return <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value}/>
                            }
                        }else {
                            return <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value}/>
                        }
                    })}
            </div>
        </div>
}
        </>
    )
}