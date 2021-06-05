import React from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import './review.css'

export default function Review() {

    const location = useLocation()

    const scholarship = location.state.scholarship
    const userSelection = location.state.userSelection

    console.log(userSelection)
    return (
        <div>
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className='review'>
            {userSelection && Object.keys(userSelection).map(key =>{
                return <div>
                <h3>{key}</h3>
                {userSelection[key].values && userSelection[key].values.map(value => <p>{value.title.DE}</p> )}
                </div>
            })}
            {Object.keys(scholarship).map(key =>{
                return <div>
                <h3>{key}</h3>
                {scholarship[key].map(value => <p>{value}</p> )}
                </div>
            })}
            </div>
        </div>
    )
}
