import React from 'react'
import searchImg from './students.svg'

import './slider.css'

export default function Slider({nr}) {
    return (
        <div className="slider-outer">
            <div className='slider__left-section'>
                <h2>Auf Basis von deinen angegebenen Daten haben wir {nr} Ergebnisse für dich</h2>
                <p>Schau sieh dir jetzt und bewirb dich direkt auf deinen Favoriten. Schau dir dazu auch gerne noch unsere Bewerbungstipps an.</p>
                <button>Zu den Tipps</button>
            </div>
            <img src={searchImg} alt="search" />
        </div>
    )
}
