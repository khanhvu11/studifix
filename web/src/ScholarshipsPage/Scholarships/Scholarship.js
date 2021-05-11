import React from 'react'
import './scholarship.css'

export default function Scholarship({scholarship}) {
    console.log(scholarship.graduation.map(val=>val.title.DE))
    return (
        <div className='scholarship-outer'>
            <h1>Name des Stipendiums</h1>
            <div className='scholarship-inner'>
                <div className='scholarship__left-section'>
                <img src={scholarship.imgURL} alt="" />
                <button type='button' className='bewerb'>Bewerb dich jetzt</button>
                <button type='button' className='tipps'>Bewerbungstipps</button>
                <h3>Erfahren mehr</h3>
            </div>
            <div className='scholarship__right-section'>
                <h2>So passt dieses Stipendium zu dir:</h2>
                {scholarship && Object.keys(scholarship).map((key,id) => {
                    return( (Array.isArray(scholarship[key]))?
                    <ul key={id}>
                        <li><h3>{key}</h3></li>
                        {scholarship[key] && scholarship[key].map((val,key)=><p key={key}>{val.title.DE}</p>)}
                    </ul>:null)
                })}
            </div>
            </div>
        </div>
    )
}
