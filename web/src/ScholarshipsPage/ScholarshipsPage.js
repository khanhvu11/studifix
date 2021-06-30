import React, {useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider'
import Scholarships from './Scholarships/Scholarships'
import Footer from './Footer/Footer'

import './scholarshipsPage.css'
export default function ScholarshipsPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    const {state} = props.location
    if(!state){
        return(<div className="scholarshipsPage">
                <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
                </div>
                <div className="section">
                    <Slider nr={0}/>
                </div>
                <Footer/>
            </div>)
    }
    return (
        <div className="scholarshipsPage">
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className="section">
                <Slider nr={state.scholarships.scholarships.length}/>
                <Scholarships scholarships = {state.scholarships.scholarships} usr_selection = {state.selection}/>
            </div>
            <Footer/>
        </div>
    )
}
