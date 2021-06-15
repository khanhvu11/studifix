import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import OptionButton from './OptionButton'

export default function MultipleChoice({func, _key, cls, lang, obj}) {
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
            <h2>{obj.description[lang]}</h2>
            <div className="button-grid">
                { //pass values for buttons. Every button is an option
                    obj.values && obj.values.map((value,id) => <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
            </div>
        </div>
}
        </>
    )
}