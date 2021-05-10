import React from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Scholarships from './Scholarships/Scholarships'

import './scholarshipsPage.css'
export default function ScholarshipsPage(props) {
    const {state} = props.location
    console.log(state)
    return (
        <div>
            <header>
                <h1>Studifix</h1>
                <Navbar/>
            </header>
            <section>
                <Slider/>
                <Scholarships scholarships = {state.scholarships}/>
            </section>
            <footer></footer>
        </div>
    )
}
