import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navbar.css'

export default function Navbar() {
    return (
        <ul>
            <li>Stipendium finden</li>
            <li>Bewerben</li>
            <li>Information</li>
            <li>Login</li>
            <li><FontAwesomeIcon icon={faSearch}/></li>
        </ul>
    )
}
