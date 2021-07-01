import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';

import './Success.css';

export default function Welcome(props) {

    return (
        <div className={'' === props.currentGrN ? 'active welcome': 'mplChoice'}>
            <div className='icon'><FontAwesomeIcon icon={faUser} /></div>
            <p className='success'>Wir benötigen noch deine persönlichen Daten für die Bewerbung</p>
        </div>
    )
}
