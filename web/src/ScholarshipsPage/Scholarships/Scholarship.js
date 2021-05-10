import React from 'react'
import './scholarship.css'

export default function Scnolarship({scholarship}) {
    console.log(scholarship.graduation.map(val=>val.title.DE))
    return (
        <div className='scholarship-outer'>
            <h1>Name des Stipendiums</h1>
            <div className='scholarship-inner'>
                <div className='scholarship__left-section'>
                <img src="" alt="" />
                <button type='button' className='bewerb'>Bewerb dich jetzt</button>
                <button type='button' className='tipps'>Bewerbungstipps</button>
                <h3>Erfahren mehr</h3>
            </div>
            <div className='scholarship__right-section'>
                <h2>So passt dieses Stipendium zu dir:</h2>
                {scholarship && Object.keys(scholarship).map(key => {
                    return( (Array.isArray(scholarship[key]))?
                    <ul>
                        <li><h3>{key}</h3></li>
                        {scholarship[key] && scholarship[key].map(val=><p>{val.title.DE}</p>)}
                    </ul>:null)
                })}
            </div>
            </div>
        </div>
    )
}
