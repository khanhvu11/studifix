import React, {useEffect} from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom';


import Navbar from '../ScholarshipsPage/Navbar/Navbar'
import ListType from './ListType'
import personalInfo from '../ApplyingProcess/personalInfo'
import sendingMess from '../ScholarshipsPage/Footer/sendingMess.svg'

import './review.css'

export default function Review() {

    const location = useLocation()
    const [sentScholarship, setSentScholarship] = useState({})

    const history = useHistory();
    const backtoFilter = () => {
        history.push('/');
    }

    
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

                    scholarship[key].value = null
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
            <h2>Überprüfen Sie Ihre Informationen</h2>
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
            <div className="scholarshipsFooter">
                <div className="buttons">
                        <button type='button' className="findingScholarships" onClick={backtoFilter}><h4>Bewerbung schicken</h4></button>
                </div>
                <div className="message">
                    <div className="questions">
                        <h1>Hast du Fragen oder Anregungen?<br></br>Dann schreib uns gerne</h1>
                        <button type='button' className="sendingMess">Nachricht senden</button>
                    </div>
                    <img src={sendingMess} alt="sendingMess" />
                </div>
            </div>
        </div>
    )
}
