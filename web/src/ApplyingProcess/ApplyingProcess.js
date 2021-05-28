import React from 'react'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import { useLocation } from 'react-router'

import './Applying.css'
import UserSelection from './UserSelection'
import { useState } from 'react'
import { useEffect } from 'react'
import TextInput from './TextInput'

export default function ApplyingProcess(props) {
    const location = useLocation()
    const [userSelection, setUserSelection] = useState({})
    const scholarship = location.state.scholarship
    const usr_selection= location.state.usr_selection
    const scholarshipRemaining = scholarship

    const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';

    useEffect(()=>{

        fetch(URL + '/api/data/selectiondata')
        //fetch('http://studifix.mi.hdm-stuttgart.de/api/data/selectiondata')
        .then((response) => response.json())
        .then((items) => {
            var selObj = {}
            console.log(items.selectionData);
            usr_selection && Object.keys(usr_selection).forEach(key => {
                console.log(key)
                var cat_indexes = usr_selection[key].map(_id => 
                    items.selectionData[key].values && items.selectionData[key].values.findIndex(val => val._id === _id)
                )

                console.log(cat_indexes)

                var values = cat_indexes.map(ind => 
                items.selectionData[key].values && items.selectionData[key].values[ind]
                )

                console.log(values)
                selObj[key] = {
                    values : values,
                    title : items.selectionData[key].title,
                    description : items.selectionData[key].description,
                    mandatory : items.selectionData[key].mandatory,
                    multiselect : items.selectionData[key].multiselect,
                }

            })

            setUserSelection(selObj)
        });

    }, [usr_selection, scholarship, scholarshipRemaining, URL])

    console.log(userSelection)
    /* console.log(scholarship)
    console.log(scholarshipRemaining) */

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
            <div className='applying-dropdown'>

                <div style={{backgroundColor: 'red'}}>was user gewählt hat</div>
                <UserSelection usr_selection={userSelection}/>

                <div style={{backgroundColor: 'yellow'}}>übrig</div>
                {Object.keys(scholarship).map((key,id) =>(key !== 'collegeGraduation' && key !== 'jobTrainingGraduation' && key !== 'uniGraduation' )?<Dropdown scholarship_cat={scholarship[key]} _key={key} />:<TextInput scholarship_cat={scholarship[key]} _key={key}/>
                )}
                {/* <Dropdown scholarship={scholarship} />
                <TextInput scholarship={scholarship}/> */}
            </div>
            <Footer/>
        </div>
    )
}
