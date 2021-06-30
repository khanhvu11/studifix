import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExternalLinkAlt,
  faGlobeEurope,
  faUniversity,
  faMoneyCheckAlt,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';


import './scholarshipModal.css'

export default function ScholarshipModal({scholarship, usr_selection, show, onHide}) {

  const [scholarshipModal, setScholarshipModal] = useState({})
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';

  useEffect(()=>{

    //get scholarship      
    fetch(URL + `/api/data/scholarship/${scholarship._id}`)
    .then((response) => {
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (response.json() && response.json().message) || response.status;
        return Promise.reject(error);
      }

      return response.json()
    })
    .then((items) => {
      console.log(items)
      setScholarshipModal(items.scholarship);
    });

  }, [URL])

  console.log(scholarshipModal)

    var iterateArray = (value) => {
        return value.map((val,id) => <p key={id}>{val.title.DE}</p>)
    }

    var notArrayValue = (category, key) => {
      if(key ==='link'){
        return <a href={category.value} target="_blank">{category.value}</a>
      }else{
        switch(category.value){
            case null: return <p>Keine Beschränkung</p>
            case true: return <p>Ja</p>
            case false: return <p>Nein</p>
            default: return <p>{category.value}</p>
        }
      }
    }

    var addingLogo = (key) => {
      switch(key){
        case 'link': return <div className='modalIcon'><FontAwesomeIcon icon={faExternalLinkAlt} /></div>
        case 'state': return <div className='modalIcon'><FontAwesomeIcon icon={faGlobeEurope} /></div>
        case 'institution': return <div className='modalIcon'><FontAwesomeIcon icon={faUniversity} /></div>
        case 'advancementDetail': return <div className='modalIcon'><FontAwesomeIcon icon={faMoneyCheckAlt} /></div>
        case 'advancementTime': return <div className='modalIcon'><FontAwesomeIcon icon={faCalendarAlt} /></div>
        default: return null
      }
    }

    return (
      scholarshipModal &&
        <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{scholarshipModal.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className ='scholarshipModal__body'>
          <div className="scholarship__left-section">
           {/*  <div className="scholarshipModal__image"> */}
              {scholarshipModal.imgURL &&<img
                  src={scholarshipModal.imgURL.value}
                />}
           {/*  </div> */}
            <button type="button" className="bewerb">
              <Link to={{pathname:'/applying', state:{scholarship, usr_selection}}}>
                Bewerb dich jetzt
              </Link>
            </button>
            <button type="button" className="tipps">
              Bewerbungstipps
            </button>
           </div>
          <div className="scholarshipModal__content">
            {scholarshipModal && Object.keys(scholarshipModal).map((key,id) => scholarshipModal[key].localization?
              <ul key={id}>
                  <li>{addingLogo(key)}<h3>{scholarshipModal[key].localization.title.DE}</h3></li>
                  {(Array.isArray(scholarshipModal[key].value))? iterateArray(scholarshipModal[key].value):(typeof scholarshipModal[key].value !=='object' ||  scholarship[key].value === null)? notArrayValue(scholarship[key], key):(scholarship[key].value.title && <p>{scholarship[key].value.title.DE}</p>)||<p>{scholarship[key].value.name}</p>}
              </ul>:null)
          }
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onHide}>Close</Button>
          {/* <Button variant='primary'><Link to={{pathname:'/applying', state:{scholarship, usr_selection}}}>Bewerb dich jetzt</Link></Button> */}
        </Modal.Footer>
      </Modal>
    )
}