import React,  { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import Footer from '../ScholarshipsPage/Footer/Footer'
import Dropdown from './Dropdown'
import UserSelection from './UserSelection'
import TextInput from './TextInput'
import ListType from './ListType'
import CheckBox from './Checkbox'


import './Applying.css'

export default function ApplyingProcess(props) {
    const location = useLocation()
    const [userSelection, setUserSelection] = useState({})
    const scholarship = location.state.scholarship
    const usr_selection= location.state.usr_selection
    const [scholarshipRemaining, setScholarshipRemaining] = useState({})

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
        });

    }, [usr_selection, scholarship, scholarshipRemaining, URL])

    console.log(userSelection)
     console.log(scholarship)
    console.log(scholarshipRemaining)

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
    return (
        <div className='applying'>
            <div className="header">
                    <h1><span>Studi</span>fix</h1>
                    <Navbar/>
            </div>
            <div className='applying-dropdown'>

                <div className='user-selected' >
                    <h1>Was Sie gewählt haben</h1>
                    <UserSelection usr_selection={userSelection}/>
                </div>

                <form className='user-selected' >
                    <h1>Was Sie noch ausfüllen müssen</h1>
                    {Object.keys(scholarshipRemaining).map(key => categorySorting(scholarshipRemaining[key], key))}
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Senden</button>
                        </div>
                    </div>
                </form>

                {/* <div className='notOptional'>
                    <h1>Stipendium - nicht optionale Information</h1>
                    {scholarship['advancement']?<ListType scholarship_cat={scholarship['advancement']} _key={'advancement'} />:null}
                    {scholarship['advancementDetail']?<ListType scholarship_cat={scholarship['advancementDetail']} _key={'advancementDetail'} />:null}
                    {scholarship['currentJobHours']?<ListType scholarship_cat={scholarship['currentJobHours']} _key={'currentJobHours'}/>:null}
                    {scholarship['link']?<ListType scholarship_cat={scholarship['link']} _key={'link'}/>:null}
                    {scholarship['nationality']?<ListType scholarship_cat={scholarship['nationality']} _key={'nationality'}/>:null}
                    {scholarship['nationalityDetail']?<ListType scholarship_cat={scholarship['nationalityDetail']} _key={'nationalityDetail'}/>:null}
                    {scholarship['provider']?<ListType scholarship_cat={scholarship['provider']} _key={'provider'}/>:null}
                    {scholarship['referenceAllowed']?<ListType scholarship_cat={scholarship['referenceAllowed']} _key={'referenceAllowed'}/>:null}
                    {scholarship['referenceDetail']?<ListType scholarship_cat={scholarship['referenceDetail']} _key={'referenceDetail'}/>:null}
                    {scholarship['referenceRequired']?<ListType scholarship_cat={scholarship['referenceRequired']} _key={'referenceRequired'}/>:null}
                    {scholarship['sideJobAllowed']?<ListType scholarship_cat={scholarship['sideJobAllowed']} _key={'sideJobAllowed'}/>:null}
                    {scholarship['specialJobExperience']?<ListType scholarship_cat={scholarship['specialJobExperience']} _key={'specialJobExperience'}/>:null}
                </div>

                <div className='optional'>
                    <h1>Stipendium - optionale Information</h1>
                    {scholarship['age']?<TextInput scholarship_cat={scholarship['age']} _key={'age'} />:null}
                    {scholarship['city']?<TextInput scholarship_cat={scholarship['city']} _key={'city'} />:null}
                    {scholarship['collegeGraduation']?<Dropdown scholarship_cat={scholarship['collegeGraduation']} _key={'collegeGraduation'} multiselect={true}/>:null}
                    {scholarship['commitment']?<Dropdown scholarship_cat={scholarship['commitment']} _key={'commitment'} multiselect={true}/>:null}
                    {scholarship['country']?<Dropdown scholarship_cat={scholarship['country']} _key={'country'} multiselect={true}/>:null}
                    {scholarship['course']?<Dropdown scholarship_cat={scholarship['course']} _key={'course'} multiselect={true}/>:null}
                    {scholarship['graduation']?<Dropdown scholarship_cat={scholarship['graduation']} _key={'graduation'} multiselect={true}/>:null}
                    {scholarship['institution']?<TextInput scholarship_cat={scholarship['institution']} _key={'institution'}/>:null}
                    {scholarship['jobTrainingGraduation']?<CheckBox scholarship_cat={scholarship['jobTrainingGraduation']} _key={'jobTrainingGraduation'}/>:null}
                    {scholarship['occupation'].value?<TextInput scholarship_cat={scholarship['occupation']} _key={'occupation'}/>:<Dropdown scholarship_cat={scholarship['occupation']} _key={'occupation'}  multiselect={true}/>}
                    {scholarship['religion']?<TextInput scholarship_cat={scholarship['religion']} _key={'religion'} />:null}
                    {scholarship['requirement'].value?<TextInput scholarship_cat={scholarship['requirement']} _key={'requirement'}/>:<Dropdown scholarship_cat={scholarship['requirement']} _key={'requirement'}  multiselect={true}/>}
                    {scholarship['semester']?<TextInput scholarship_cat={scholarship['semester']} _key={'semester'}/>:null}
                    {scholarship['state']?<TextInput scholarship_cat={scholarship['state']} _key={'state'}/>:null}
                    {scholarship['support'].value?<TextInput scholarship_cat={scholarship['support']} _key={'support'}/>:<Dropdown scholarship_cat={scholarship['support']} _key={'support'}  multiselect={true}/>}
                    {scholarship['supportSpecific'].value?<TextInput scholarship_cat={scholarship['supportSpecific']} _key={'supportSpecific'}/>:<Dropdown scholarship_cat={scholarship['supportSpecific']} _key={'supportSpecific'}  multiselect={true}/>}
                    {scholarship['uniGraduation'].value?<TextInput scholarship_cat={scholarship['uniGraduation']} _key={'uniGraduation'}/>:<Dropdown scholarship_cat={scholarship['uniGraduation']} _key={'uniGraduation'}  multiselect={true}/>}

                </div>
 */}
                
            </div>
            <Footer/>
        </div>
    )
}
