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
    
    //if props do not contain any scholarship data, there will no scholarship showed
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
    //otherwise render all scholarships that are sent from the backend
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
