import React from 'react'
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

import './Success.css';

export default function Success(props) {

    const history = useHistory();
    const backtoFilter = () => {
        history.push('/');
    }

    return (
        <div className={'success' === props.currentGrN ? 'active': 'mplChoice'}>
            <div className='icon'><FontAwesomeIcon icon={faClipboardCheck} /></div>
            <p className='success'>Deine Bewerbung wurde erfolgreich geschickt</p>
            <button type='button' className="findingScholarships" onClick={backtoFilter}><h4>Zurück zur Stipendiensuche</h4></button>
        </div>
    )
}
