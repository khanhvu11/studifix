import React, {useState} from 'react'

export default function OptionButton({buttonFunc, buttonLang, value}) {
    const [isChosen, setIsChosen] = useState(false)

    function select(){
        setIsChosen(!isChosen)  
        buttonFunc(isChosen, value._id) 
    }

    return (
        <button type="button"  className={(isChosen? "chosen ":"" )+ "choice"} onClick={select}>
            <p>{value.title[buttonLang]}</p>
        </button>
    )
}
