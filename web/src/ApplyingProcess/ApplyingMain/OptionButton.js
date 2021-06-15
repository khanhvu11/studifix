import React, {useState, useEffect} from 'react'

export default function OptionButton({active, buttonFunc, buttonLang, value}) {
    const [isChosen, setIsChosen] = useState(false)

    useEffect(()=>{
        if(!active){
            setIsChosen(false)
        }
    },[active])

    function select(){
        setIsChosen(!isChosen)  
        buttonFunc(isChosen, value) 
    }

    return (
        <button type="button"  className={(isChosen? "chosen ":"" )+ "choice"} onClick={select}>
            <p>{value.title[buttonLang]}</p>
        </button>
    )
}
