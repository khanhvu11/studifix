import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Scholarships from './Scholarships/Scholarships'
import Footer from './Footer/Footer'

import './scholarshipsPage.css'
export default function ScholarshipsPage(props) {
    const {state} = props.location
    console.log(state)
    return (
        <div className="scholarshipsPage">
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className="section">
                <Slider nr={state.scholarships.length}/>
                <Scholarships scholarships = {state.scholarships}/>
            </div>
            <Footer/>
        </div>
    )
}
