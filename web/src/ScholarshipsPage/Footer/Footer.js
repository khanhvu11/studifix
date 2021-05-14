import React from 'react'
import sendingMess from './sendingMess.svg'
import { useHistory } from 'react-router-dom';


import './footer.css'

export default function Footer() {

    const history = useHistory();
    const backtoFilter = () => {
        history.push('/');
    }

    return (
        <div className="scholarshipsFooter">
                <div className="buttons">
                    <button type='button' className="findingScholarships" onClick={backtoFilter}><h4>Zurück zur Stipendiensuche</h4></button>
                    <button type='button' className="startSite"><h4>Zurück zur Startseite</h4></button>
                </div>
                <div className="message">
                    <div className="questions">
                        <h1>Hast du Fragen oder Anregungen?<br></br>Dann schreib uns gerne</h1>
                        <button type='button' className="sendingMess">Nachricht senden</button>
                    </div>
                    <img src={sendingMess} alt="sendingMess" />
                </div>
            </div>
    )
}
