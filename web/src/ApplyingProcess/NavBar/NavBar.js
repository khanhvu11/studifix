import React, {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export default function NavBar(props){

    const [groupName, setGroupName] = useState('')

  /*   useEffect(()=>{
        setGroupName(cls)
    },[cls])
 */
    const onClickHandler = (grN) => {
        props.setGroupName(grN)
        setGroupName(grN)
    }

    return (
        <nav className="filter-nav">
            <div className='logo'><h1><span>Studi</span>fix</h1></div>
            <ul>
                {props.groupNameList && props.groupNameList.map((_groupName, id) =>{
                    return <li key={id} className={props.groupName===_groupName?"focus":""}><label onClick={() => onClickHandler(_groupName)}>{_groupName}</label></li>
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

