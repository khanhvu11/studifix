import React, {useEffect} from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'

import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import ListType from './ListType'
import personalInfo from '../ApplyingProcess/personalInfo'
import './review.css'

export default function Review() {

    const location = useLocation()
    const [sentScholarship, setSentScholarship] = useState({})
    
    useEffect(() => {
        const scholarship = location.state.scholarship
        const completedForm = location.state.completedForm
        const userSelection = location.state.userSelection
        const infoKey = ['provider', 'link', 'advancement', 'advancementDetail', 'advancementTime'/* , 'city', 'country', 'referenceAllowed', 'referenceRequiered', 'age', 'support' */]

        console.log(userSelection)
        console.log(completedForm)

        Object.keys(scholarship).forEach(key =>{

            if(scholarship[key].localization){

                if(!infoKey.includes(key)){

                    scholarship[key].value = ''
                } 
                
                Object.keys(completedForm).forEach(cfKey =>{

                    if(Object.keys(personalInfo).includes(cfKey)){
                        personalInfo[cfKey].value = completedForm[cfKey]
                        scholarship[cfKey] = personalInfo[cfKey]
                    }

                    if(cfKey === key){
                        scholarship[key].value = completedForm[cfKey]
                    }/* else{
                        scholarship[key].value = ''
                    } */
                })

                Object.keys(userSelection).forEach(usKey =>{
                    if(usKey === key){
                        scholarship[key].value = userSelection[usKey].values
                    }/* else{
                        scholarship[key].value = ''
                    } */
                })
        }

        })

        setSentScholarship(scholarship)
        
    }, [location])

    console.log(sentScholarship)

    return (
        <div>
            <div className="header">
                <h1><span>Studi</span>fix</h1>
                <Navbar/>
            </div>
            <div className='review'>
            {/* {userSelection && Object.keys(userSelection).map(key =>{
                return <div>
                <h3>{key}</h3>
                {userSelection[key].values && userSelection[key].values.map(value => <p>{value.title.DE}</p> )}
                </div>
            })} */}
            {sentScholarship && Object.keys(sentScholarship).map(key =>{
                return <div>
                    <ListType scholarship_cat={sentScholarship[key]} _key={key}/>
                </div>
            })}
            </div>
        </div>
    )
}
