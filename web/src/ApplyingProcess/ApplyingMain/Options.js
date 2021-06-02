import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OptionButton from './OptionButton'
import TextInput from '../TextInput'

export default function MultipleChoice({func, _key, cls, lang, obj, selectionData}) {
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
        {obj.localization &&
        <div className={(obj.localization.title[lang]===cls)? 'mplChoice active': 'mplChoice'}>
            <label className="label-sml" htmlFor={obj.localization.title[lang]}>{obj.localization.title[lang]} {/*
                obj.mandatory ? "*": ""
            */}</label> 
            {/* {
                !obj.mandatory ? "*": ""

            } */}
            <h2>{obj.localization.description[lang]}</h2>
            {(Array.isArray(obj.value))? (
                <div className="button-grid">
                    {obj.value && obj.value.map((value,id) => <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
                </div>
            ):((Object.keys(selectionData).includes(_key))?(
                <div className="button-grid">
                    {selectionData[_key].values && selectionData[_key].values.map((value,id) => <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
                </div>):(
                    <div className="button-grid">
                        <TextInput scholarship_cat={obj} _key={_key} />
                    </div>))
            }
        </div>
}
        </>
    )
}