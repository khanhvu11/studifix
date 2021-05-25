import React from 'react'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import { useLocation } from 'react-router'

import './Applying.css'

export default function ApplyingProcess(props) {
    const location = useLocation()
    const scholarship = location.state

    if(!scholarship){
        return(
            <div className='applying'>
            <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
            </div>
            <Footer/>
        </div>
        )
    }
    return (
        <div className='applying'>
            <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
            </div>
            <div className='applying-dropdown'><Dropdown scholarship={scholarship} /></div>
            <Footer/>
        </div>
    )
}
