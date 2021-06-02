import React,  { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import UserSelection from './UserSelection'
import TextInput from './TextInput'
import ListType from './ListType'
import CheckBox from './Checkbox'

import Filter from './ApplyingMain/ApplyingMain';
import NavBar from './NavBar/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';


import './Applying.css'

export default function ApplyingProcess(props) {
    const location = useLocation()
    const [selectionData, setSelectionData] = useState({})
    const [userSelection, setUserSelection] = useState({})
    const scholarship = location.state.scholarship
    const usr_selection= location.state.usr_selection
    const [scholarshipRemaining, setScholarshipRemaining] = useState({})

    const language = 'DE';
    const [clN, setClN] = useState('');
    const [labels, setLabels] = useState([]);

    const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';

    useEffect(()=>{
        
        //get selectiondata
        
        fetch(URL + '/api/data/selectiondata')
        .then((response) => response.json())
        .then((items) => {
            var selObj = {}
            setSelectionData(items.selectionData);
            //find out which categories user selected
            usr_selection && Object.keys(usr_selection).forEach(key => {
                // find indexes of values of each category
                var cat_indexes = usr_selection[key].map(_id => 
                    items.selectionData[key].values && items.selectionData[key].values.findIndex(val => val._id === _id)
                )
                // from the index find the value with their name
                var values = cat_indexes.map(ind => 
                items.selectionData[key].values && items.selectionData[key].values[ind]
                )
                //create new selection object, which contains categories that user selected
                selObj[key] = {
                    values : values,
                    title : items.selectionData[key].title,
                    description : items.selectionData[key].description,
                    mandatory : items.selectionData[key].mandatory,
                    multiselect : items.selectionData[key].multiselect,
                }

            })

            setUserSelection(selObj)
            //delete scholarship's categories which already exist in user's selection data
            Object.keys(selObj).forEach(selKey => {
                Object.keys(scholarship).forEach(scholarKey => {
                    if(scholarKey === selKey){

                        delete scholarship[selKey]
                       /*  var elementIndex = selObj[selKey].values.map(name => 
                            scholarship[scholarKey].value && scholarship[scholarKey].value.findIndex(val => val.title.DE === name)
                        ) */

                        /* elementIndex.map(ind => scholarship[scholarKey].value !== null && scholarship[scholarKey].value.splice(ind, 1)) */

                    }
                })
            })

            setScholarshipRemaining(scholarship)

            var labels = scholarship && Object.keys(scholarship).map((key) => scholarship[key].localization? scholarship[key].localization.title[language]: null);
            setClN(labels[0]);
            setLabels(labels);
        });

    }, [usr_selection, scholarship, scholarshipRemaining, URL])

    console.log(userSelection)
     console.log(scholarship)
    console.log(scholarshipRemaining)

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
          <NavBar cls={clN} func={labelClick} lang={language} obj={scholarshipRemaining} />
        )}
        {scholarshipRemaining && (
          <Filter
            cls={clN}
            labels={labels}
            func={labelClick}
            lang={language}
            obj={scholarshipRemaining}
            selectionData = {selectionData}
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
