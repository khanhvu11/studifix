import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Scholarships from './Scholarships/Scholarships'

import './scholarshipsPage.css'
export default function ScholarshipsPage(props) {
    const {state} = props.location
    console.log(state)
    return (
        <div className="scholarshipsPage">
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className="section">
                <Slider nr={state.scholarships.length}/>
                <Scholarships scholarships = {state.scholarships}/>
            </div>
            <div className="footer">
              {/*   <div className="buttons">
                    <button>Zurück zur Stipendiensuche</button>
                    <button>Zurück zur Startseite</button>
                </div>
                <div>
                    <div>
                        <h1>Hast du Fragen oder Anregungen?<br></br>Dann schreib uns gerne</h1>
                        <button>Nachricht senden</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
