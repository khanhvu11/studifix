import React from 'react'
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

export default function Success() {

    const history = useHistory();
    const backtoFilter = () => {
        history.push('/');
    }

    return (
        <div>
            <FontAwesomeIcon icon={faClipboardCheck} />
            <p>Deine Bewerbung wurde erfolgreich geschicht</p>
            <button type='button' className="findingScholarships" onClick={backtoFilter}><h4>Zurück zur Stipendiensuche</h4></button>
        </div>
    )
}
