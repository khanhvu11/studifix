import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export default function NavBar({ cls, func , lang, obj} ){

    const [label, setLabel] = useState('')

    useEffect(()=>{
        setLabel(cls)
    },[cls])

    const onClickHandler = (cn) => {
        func(cn)
        setLabel(cn)
    }

    //navbar-expand-lg navbar-light bg-light
    /* {Object.keys(obj).map((key, id) => {
        if(key !=="city" && key !=="country"){ return (obj[key].title && <li key={id} className={label===obj[key].title[lang]?"focus":""}><label htmlFor={obj[key].title[lang]} onClick={() => onClickHandler(obj[key].title[lang])}>{obj[key].title[lang]}</label>{obj[key].mandatory ? " *": ""}</li>)}})} */

    return (
        <nav className="filter-nav">
            <div className='logo'><h1><span>Studi</span>fix</h1></div>
            <ul>
                {Object.keys(obj).map((key, id) => 
                    (key !=="city" && key !=="country")?(obj[key].title && <li key={id} className={label===obj[key].title[lang]?"focus":""}><label htmlFor={obj[key].title[lang]} onClick={() => onClickHandler(obj[key].title[lang])}>{obj[key].title[lang]}</label>{obj[key].mandatory ? " *": ""}</li>):null)}

                <li className={(label==="submit"?"focus":"") + " submit"}><label onClick={() => onClickHandler("submit")}>Submit</label></li>
            </ul>
            <div className="footer">
                <div className="support"><p><span>Support</span><br/>Wir sind für dich da!</p></div>
                <div className="icon-area">
                    <FontAwesomeIcon icon={faCogs} />
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
            </div>
        </nav>
    )
}

