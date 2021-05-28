import React from 'react'
import Scholarship from './Scholarship'

export default function Scholarships({scholarships, usr_selection}) {
    console.log(scholarships)
    return (
        <div className='scholarships'>
            {scholarships.length!==0?scholarships.map((scholar,key)=> <Scholarship key={key} scholarship={scholar} usr_selection={usr_selection}/>):<p>Oops!!<br></br> There is no appropriate result</p>}
        </div>
    )
}
