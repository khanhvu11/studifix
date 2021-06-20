import React,  { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import ListType from '../Review/ListType'
import CheckBox from './Checkbox'

import Filter from './ApplyingMain/ApplyingMain';
import NavBar from './NavBar/NavBar';

import personalInfo from './personalInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';


import './Applying.css'

export default function ApplyingProcess(props) {
    const [applicationData, setApplicationData] = useState({})

    const language = 'DE';
    const [groupName, setGroupName] = useState('');
    const groupNameList = ['Name', 'Geburtsdatum', 'Adresse', 'Kontaktdaten', 'Gender', 'Familienstand']

    const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';

    useEffect(()=>{

        //get selectiondata      
        fetch(URL + '/api/data/applicationdata')
        .then((response) => response.json())
        .then((items) => {
            setApplicationData(items.applicationData);
        });

    }, [URL])

    console.log(applicationData)

    //assigning type of values to type of components
    var categorySorting = (category, key) =>{
        if(category.localization){
            if(category.value == null){
                return <TextInput scholarship_cat={category} _key={key} />
            }else if(key !== 'link' && (typeof category.value == 'string' || typeof category.value == 'number' || typeof category.value == 'boolean')){
                return <CheckBox scholarship_cat={category} _key={key} />
            }else if(Array.isArray(category.value)){
                if(category.value.length >1){
                    return <Dropdown scholarship_cat={category} _key={key} multiselect={true}/>
                }else{
                    return <ListType scholarship_cat={category} _key={key} />}
            }else if(typeof category.value === 'object'){
                return <ListType scholarship_cat={category} _key={key} />
            }else {
                return <ListType scholarship_cat={category} _key={key} />
            }

        }
    }


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

    var labelClick = (cn) => {
        setClN(cn);
      };
    
      console.log(clN);

    return (
       
        <form className="outerContainer">
        {scholarshipRemaining && (
          <NavBar cls={clN} func={labelClick} lang={language} obj={labels} />
        )}
        {scholarshipRemaining && (
          <Filter
            cls={clN}
            labels={labels}
            func={labelClick}
            lang={language}
            obj={scholarshipRemaining}
            selectionData = {selectionData}
            userSelection = {userSelection}
            scholarship = {scholarship}
          />
        )}
        <div className="footer footer-sm">
          {/* <button type='submit' className="btn btn-primary btn-lg">Submit</button> */}
          <div className="support">
            <p>
              <span>Support</span>
              <br />
              Wir sind für dich da!
            </p>
          </div>
          <div className="icon-area">
            <FontAwesomeIcon icon={faCogs} />
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
        </div>
      </form>
    )
}
