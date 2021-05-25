import React from 'react'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Dropdown from './Dropdown'
import { useLocation } from 'react-router'

import './Applying.css'

export default function ApplyingProcess(props) {
    const location = useLocation()
    const scholarship = location.state

    console.log(scholarship)

    return (
        <div className='applying'>
            <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
            </div>
            <div className='applying-dropdown'><Dropdown scholarship={scholarship} /></div>
        </div>
    )
}
