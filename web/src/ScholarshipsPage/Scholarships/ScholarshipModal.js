import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default function ScholarshipModal({scholarship, show, onHide}) {

    var iterateArray = (value) => {
        return value.map((val,id) => <p key={id}>{val.title.DE}</p>)
    }

    var notArrayValue = (category, key) => {
      if(key ==='link'){
        return <a href={category.value}>{category.value}</a>
      }else{
        switch(category.value){
            case null: return <p>Keine Beschränkung</p>
            case true: return <p>Ja</p>
            case false: return <p>Nein</p>
            default: return <p>{category.value}</p>
        }
      }
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{scholarship.provider.value.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {scholarship && Object.keys(scholarship).map((key,id) => scholarship[key].localization?
            <ul key={id}>
                <li><h3>{scholarship[key].localization.title.DE}</h3></li>
                {(Array.isArray(scholarship[key].value))? iterateArray(scholarship[key].value):(typeof scholarship[key].value !=='object' ||  scholarship[key].value === null)? notArrayValue(scholarship[key], key):(scholarship[key].value.title && <p>{scholarship[key].value.title.DE}</p>)||<p>{scholarship[key].value.name}</p>}
            </ul>:null)
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={onHide}>Close</Button>
          <Button variant='primary'><Link to={{pathname:'/applying', state:scholarship}}>Bewerb dich jetzt</Link></Button>
        </Modal.Footer>
      </Modal>
    )
}