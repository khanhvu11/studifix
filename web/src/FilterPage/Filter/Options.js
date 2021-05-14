import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OptionButton from './OptionButton'

export default function MultipleChoice({func, _key, cls, lang, obj}) {
    const [optionList, setOptionList]=useState([])
    const [removedOption, setRemovedOption] = useState('')
    /* const [category, setCategory] = useState([])

    function getCategory(id, optionList){
        var arr = [...category]
        arr[id] = optionList
        setCategory(arr)
    } */

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

        if(!obj.multiselect){
            if(newList.length>1){
                setRemovedOption(newList[0])
                newList.splice(0, 1)
            }
        }

        setOptionList(newList)    
        /* getCategory(obj.title[lang], newList)   */  
        func(_key, newList)
    }

    console.log(removedOption)

    return (
        <>
        {obj.title && obj.mandatory && obj.description &&
        <div className={(obj.title[lang]===cls)? 'mplChoice active': 'mplChoice'}>
            <label className="label-sml" htmlFor={obj.title[lang]}>{obj.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {
                obj.mandatory ? "*": ""

            }
            <p>{obj.description[lang]}</p>
            <div className="button-grid">
                {obj.values && obj.values.map((value,id) => <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
            </div>
        </div>
}
        </>
    )
}