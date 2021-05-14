import React from 'react'
import './scholarship.css'

export default function Scholarship({scholarship}) {
    /* console.log(scholarship.graduation.map(val=>val.title.DE)) */
    return (
        <div className='scholarship-outer'>
            <h1>{scholarship.provider.value.name}</h1>
            <div className='scholarship-inner'>
                <div className='scholarship__left-section'>
                <img src={scholarship.imgURL.value} alt="" />
                <button type='button' className='bewerb'>Bewerb dich jetzt</button>
                <button type='button' className='tipps'>Bewerbungstipps</button>
                <h3>Erfahren mehr</h3>
            </div>
            <div className='scholarship__right-section'>
                <h2>So passt dieses Stipendium zu dir:</h2>
                {scholarship && Object.keys(scholarship).map((key,id) => scholarship[key].localization?
                    <ul key={id}>
                        <li><h3>{scholarship[key].localization.title.DE}</h3></li>
                        {(Array.isArray(scholarship[key].value))?scholarship[key].value.map((val,key)=><p key={key}>{val.title.DE}</p>):<p>{typeof scholarship[key].value !=='object'?scholarship[key].value:null }</p>}
                    </ul>:null)
                }
            </div>
            </div>
        </div>
    )
}
