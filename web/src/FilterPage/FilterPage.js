import React, { useState, useEffect } from 'react';

import Filter from './Filter/Filter';
import NavBar from './NavBar/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function FilterPage() {
  const language = 'DE';
  const [clN, setClN] = useState('');
  const [listCat, setListCat] = useState({});

  useEffect(() => {
    /* https://studifix-mock-api-default-rtdb.europe-west1.firebasedatabase.app/.json */
    /* http://localhost:4000/data/selectiondata */
    fetch('http://localhost:4000/data/selectiondata')
      .then((response) => response.json())
      .then((items) => setListCat(items.selectionData));
  }, []);

  //console.log(listCat.city)

  var labelClick = (cn) => {
    setClN(cn);
  };

  /* console.log(clN) */

  return (
    <form className="outerContainer">
      {listCat && <NavBar func={labelClick} lang={language} obj={listCat} />}
      {listCat && <Filter cls={clN} lang={language} obj={listCat} />}
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
  );
}
