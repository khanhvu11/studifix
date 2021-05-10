import React from 'react'
import Scholarship from './Scholarship'

export default function Scholarships({scholarships}) {
    console.log(scholarships)
    return (
        <div className='scholarships'>
            {scholarships.map((scholar,key)=> <Scholarship key={key} scholarship={scholar}/>)}
        </div>
    )
}
