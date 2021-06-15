import React, {useState, useEffect} from 'react'

export default function OptionButton({active, buttonFunc, buttonLang, value}) {
    //if option is chosen
    //if true it will be colored by CSS
    const [isChosen, setIsChosen] = useState(false)

    useEffect(()=>{
        if(!active){
            setIsChosen(false)
        }
    },[active])

    //to set isChosen to true or false
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
