import React, { useState, useEffect } from 'react';

import Filter from './Filter/Filter';
import NavBar from './NavBar/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function FilterPage() {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';
  const language = 'DE';
  const [clN, setClN] = useState('');
  const [listCat, setListCat] = useState({});

  console.log(URL);

  useEffect(() => {
    /* https://studifix-mock-api-default-rtdb.europe-west1.firebasedatabase.app/.json */
    /* http://localhost:4000/data/selectiondata */
    fetch(URL + '/api/data/selectiondata')
      //fetch('http://studifix.mi.hdm-stuttgart.de/api/data/selectiondata')
      .then((response) => response.json())
      .then((items) => {
        setListCat(items.selectionData);
        var labels =
          items.selectionData &&
          Object.keys(items.selectionData).map((key) =>
            items.selectionData[key].title
              ? items.selectionData[key].title[language]
              : null
          );
        setClN(labels[0]);
      });
  }, [URL]);

  var labelClick = (cn) => {
    setClN(cn);
  };

  console.log(clN);

  return (
    <form className="outerContainer">
      {listCat && (
        <NavBar cls={clN} func={labelClick} lang={language} obj={listCat} />
      )}
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
