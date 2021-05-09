import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OptionButton from './OptionButton'

export default function MultipleChoice({func, cls, lang, obj}) {
    const [optionList, setOptionList]=useState([])
    /* const [category, setCategory] = useState([])

    function getCategory(id, optionList){
        var arr = [...category]
        arr[id] = optionList
        setCategory(arr)
    } */

    var getOption = (chosen, option) => {
        var newList = [...optionList]
        if(!chosen){
            if(!newList.includes(option)){
                newList = newList.concat(option)
            }

        } else {
            var index = newList.indexOf(option)
            newList.splice(index, 1)
        }
        setOptionList(newList)    
        /* getCategory(obj.title[lang], newList)   */  
        func(obj.title[lang], newList)
    }

    console.log(optionList)

    return (
        <div className={(obj.title[lang]===cls)? 'mplChoice active': 'mplChoice'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {
                obj.mandatory ? "*": ""

            }
            <p>{obj.description[lang]}</p>
            <div className="button-grid">
                {obj.values && obj.values.map((value,id) => <OptionButton key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
            </div>
        </div>
    )
}