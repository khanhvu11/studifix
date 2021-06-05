import React from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import './review.css'

export default function Review() {

    const location = useLocation()

    const scholarship = location.state.scholarship
    return (
        <div>
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className='review'>
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
