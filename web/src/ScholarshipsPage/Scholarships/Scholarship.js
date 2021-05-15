import React from 'react'
import './scholarship.css'

export default function Scholarship({scholarship}) {
    /* console.log(scholarship.graduation.map(val=>val.title.DE)) */

    var iterateArray = (value) => {
        return value.map((val,id) => <p key={id}>{val.title.DE}</p>)
    }

    var notArrayValue = (category) => {
        switch(category.value){
            case null: return <p>Keine Beschränkung</p>
            case true: return <p>Ja</p>
            case false: return <p>Nein</p>
            default: return <p>{category.value}</p>
        }
    }

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
                        {(Array.isArray(scholarship[key].value))? iterateArray(scholarship[key].value):(typeof scholarship[key].value !=='object' ||  scholarship[key].value === null)? notArrayValue(scholarship[key]):<p>{scholarship[key].value.name}</p> }
                    </ul>:null)
                }
                {/* <ul>
                    //provider
                    <li><h3>{scholarship.provider.localization.title.DE}</h3></li>
                    <p>{scholarship.provider.value.name}</p>
                    //link
                    <li><h3>{scholarship.link.localization.title.DE}</h3></li>
                    <p>{scholarship.link.value}</p>
                    //occupation
                    <li><h3>{scholarship.occupation.localization.title.DE}</h3></li>
                    <p>{scholarship.occupation.value === null?"Keine Beschränkung":scholarship.occupation.value}</p>
                    //semester
                    <li><h3>{scholarship.semester.localization.title.DE}</h3></li>
                    <p>{scholarship.semester.value}</p>
                    //graduation
                    <li><h3>{scholarship.graduation.localization.title.DE}</h3></li>
                    {scholarship.graduation.value.map(val => <p>{val.title.DE}</p>)}
                    //course
                    <li><h3>{scholarship.course.localization.title.DE}</h3></li>
                    {scholarship.course.value.map(val => <p>{val.title.DE}</p>)}
                    //country
                    <li><h3>{scholarship.country.localization.title.DE}</h3></li>
                    <p>{scholarship.country.value  === null?"Keine Beschränkung":scholarship.country.value}</p>
                    //city
                    <li><h3>{scholarship.city.localization.title.DE}</h3></li>
                    <p>{scholarship.city.value  === null?"Keine Beschränkung":scholarship.city.value}</p>
                    //state
                    <li><h3>{scholarship.state.localization.title.DE}</h3></li>
                    <p>{scholarship.state.value  === null?"Keine Beschränkung":scholarship.state.value}</p>

                    <li><h3>{scholarship.semester.localization.title.DE}</h3></li>
                    <p>{scholarship.semester.value}</p>
                </ul> */}

            </div>
            </div>
        </div>
    )
}
