import React,  { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router'

/* import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import ListType from '../Review/ListType'
import CheckBox from './Checkbox' */

import Filter from './ApplyingMain/ApplyingMain';
import NavBar from './NavBar/NavBar';

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'

import personalInfo from './personalInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';


import './Applying.css'

export default function ApplyingProcess(props) {
    const history = useHistory();
    const {state} = props.location
    
    const [applicationData, setApplicationData] = useState({})

    const language = 'DE';
    const [groupName, setGroupName] = useState('Name');
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
    /* var categorySorting = (category, key) =>{
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
    } */


    if(typeof state === 'undefined'){
        history.push({
            pathname: '/'
          });
        return null
       /*  return(
            <div className='applying'>
            <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
            </div>
            <div>Please go back to filter process and select your scholarship</div>
            <Footer/>
        </div>
        ) */
    }

    var _setGroupName = (groupName) => {
        setGroupName(groupName);
      };
    
      console.log(groupName);

    return (
       
        <form className="outerContainer">
            <NavBar 
                groupName={groupName} 
                setGroupName={_setGroupName} 
                lang={language} 
                groupNameList={groupNameList} 
                />
            {applicationData && <Filter
                groupName={groupName}
                setGroupName={_setGroupName}
                lang={language}
                data={applicationData}
                groupNameList={groupNameList} 
                scholarshipId = {state.scholarship._id}
            />
            }
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
