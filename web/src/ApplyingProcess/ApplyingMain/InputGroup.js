import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from '../InputComponents/Dropdown';
import TextInput from '../InputComponents/TextInput'

export default function InputGroup( {memberList, groupName, currentGrN, setGroupName, lang, data, getValue}) {
  

   /*  var getInputValue = (member, option) => {
        var newList = [...optionList]
        if(!isChosen){
            if(!newList.includes(option)){
                newList = newList.concat(option)
            }

        } else {
            var index = newList.indexOf(option)
            newList.splice(index, 1)
        }

        if((obj.multiselect && !obj.multiselect) || Object.keys(personalInfo).includes(_key) || (obj.localization && !(Array.isArray(obj.value)))){
            if(newList.length>1){
                setRemovedOption(newList[0])
                newList.splice(0, 1)
            }
            if(isChosen){
                setRemovedOption('')
            }
        }


        setOptionList(newList)    
        /* getCategory(obj.title[lang], newList)   
        func(_key, newList)
    } */

    /* console.log(removedOption) */
    
    return (
        <>
        {data &&
        <div className={(currentGrN===groupName)? 'mplChoice active': 'mplChoice'}>
            {/* {(data.values && (Array.isArray(data.values)))? ( */}
                <div className="inputGroup">
                    {memberList && memberList.map((member,id) => {
                        if(data[member]){
                            if(Array.isArray(data[member].values)){
                            return <Dropdown key={id} getValue={getValue} lang={lang} obj={data[member]} _key={member} />
                        }else{
                            return <TextInput obj={data[member]} _key={member}  getValue={getValue} lang={lang} />
                        }
                        }
                    }
                    )}
                </div>
                 {/* <TextInput scholarship_cat={data[member]} _key={member}  buttonFunc={getValue} lang={lang} /> */}
           {/*  ):((Object.keys(selectionData).includes(_key))?(
                <div className="button-grid">
                    {selectionData[_key].values && selectionData[_key].values.map((value,id) => <OptionButton active={removedOption===value._id?false:true} key={id} buttonFunc={getOption} buttonLang={lang} value={value} />)}
                </div>):(
                    <div className="button-grid">
                        
                            {/* (_key === 'adresse')?(
                                Object.keys(obj.value).map(key => 
                                    <TextInput scholarship_cat={obj.value[key]} _key={key}  buttonFunc={getOption} buttonLang={lang} />
                                )
                            ): 

                            <TextInput scholarship_cat={obj} _key={_key}  buttonFunc={getOption} buttonLang={lang} />
                    </div>)) */}
            
        </div>
}
        </>
    )
}