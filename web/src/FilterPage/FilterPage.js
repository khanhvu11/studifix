import React, { useState, useEffect } from 'react';

import Filter from './Filter/Filter';
import NavBar from './NavBar/NavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function FilterPage() {
  const URL = process.env.REACT_APP_API_URL_PREFIX || 'http://localhost';

  const language = 'DE';
  //the current label is shown in NavBar
  const [clN, setClN] = useState('');
  //filterData from backend will be saved in listCat
  const [listCat, setListCat] = useState({});
  //list of all labels
  const [labels, setLabels] = useState([]);
  console.log(URL);
  // get filterData from Backend
  useEffect(() => {
    /* https://studifix-mock-api-default-rtdb.europe-west1.firebasedatabase.app/.json */
    /* http://localhost:4000/data/filterdata */
    fetch(URL + '/api/data/filterdata')
      //fetch('http://studifix.mi.hdm-stuttgart.de/api/data/filterdata')
      .then((response) => response.json())
      .then((items) => {
        setListCat(items.filterData);
        //get list of labels from filterData
        var labels =
          items.filterData &&
          Object.keys(items.filterData).map((key) =>
            items.filterData[key].title
              ? items.filterData[key].title[language]
              : null
          );
        //set first label shown when website appears
        setClN(labels[0]);
        setLabels(labels);
      });
  }, [URL]);

  //get current label when user click it
  var labelClick = (cn) => {
    setClN(cn);
  };

  console.log(clN);

  return (
    <form className="outerContainer">
      {listCat && (
        <NavBar cls={clN} func={labelClick} lang={language} obj={listCat} />
      )}
      {listCat && (
        <Filter
          cls={clN}
          labels={labels}
          func={labelClick}
          lang={language}
          obj={listCat}
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
  );
}
