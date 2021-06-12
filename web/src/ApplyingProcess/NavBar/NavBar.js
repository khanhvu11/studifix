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

    return (
        <nav className="filter-nav">
            <div className='logo'><h1><span>Studi</span>fix</h1></div>
            <ul>
                {obj.map((_label, id) =>{
                    if(_label === 'mandatory'){
                        return <h2 style={{color:'#1170fe'}}>Pflichtfelder</h2>
                    }else if(_label === 'optional'){
                        return <h2 style={{color:'#1170fe'}}>Optionale Felder</h2>
                    }else if(_label === 'perInfo'){
                        return <h2 style={{color:'#1170fe'}}>Persönliche Angaben</h2>
                    }else{
                        return <li key={id} className={label===_label?"focus":""}><label htmlFor={_label} onClick={() => onClickHandler(_label)}>{_label}</label></li>
                    }
                })}
               
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

