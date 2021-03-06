import React ,{ useEffect , useState } from 'react';
import ScholarshipModal from './ScholarshipModal';
/* import { Link } from 'react-router-dom'; */
import { GiMoneyStack } from 'react-icons/gi';
import { MdTimer } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import './scholarship.css';

export default function Scholarship({ scholarship, usr_selection }) {
  /* console.log(scholarship.graduation.map(val=>val.title.DE)) */
  const history = useHistory();
  const [modalShow, setModalShow] = React.useState(false);
  console.log(scholarship);
  console.log(usr_selection);

  const toApplyingPage = () =>{
    history.push({
      pathname: '/applying',
      state:{scholarship, usr_selection},
    });
  
  }

  /* () => setModalShow(true) */

  return (
    <>
      <div className="scholarship__card" onClick={() => setModalShow(true)}>
        <div className="scholarship__card__imgContainer">
          <img
            className="scholarship__card__picture"
            src={scholarship.imgURL.value}
            alt='card'
          />
        </div>

        <div className="scholarship__card__textContainer">
          <div className="scholarship__card__text_upper">
            {scholarship.name}
          </div>

          <div className="scholarship__card__text_lower">
            <div className="scholarship__card__text_left">
              <div className="scholarship__card__icon">
                <GiMoneyStack size="30px" />
              </div>
              <div className="scholarship__card__description">
                {scholarship.advancement.value.title.DE}
              </div>
            </div>
            <div className="scholarship__card__text_right">
              <div className="scholarship__card__icon">
                <MdTimer size="30px" />
              </div>
              <div className="scholarship__card__description">
                {scholarship.advancementTime.value.title.DE}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scholarship-outer">
        <ScholarshipModal
          scholarship={scholarship}
          usr_selection = {usr_selection}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </>
  );
}

//  <h1>{scholarship.provider.value.name}</h1>
//       <div className="scholarship-inner">
//         <div className="scholarship__left-section">
//           <img src={scholarship.imgURL.value} alt="" />
//           <button type="button" className="bewerb">
//             <Link to={{ pathname: '/applying', state: scholarship }}>
//               Bewerb dich jetzt
//             </Link>
//           </button>
//           <button type="button" className="tipps">
//             Bewerbungstipps
//           </button>
//           <h3 type="button" onClick={() => setModalShow(true)}>
//             Erfahren mehr
//           </h3>
//         </div>
//         <div className="scholarship__right-section">
//           <h2>So passt dieses Stipendium zu dir:</h2>
//           <ul>
//             <li>
//               <h3>{scholarship.advancement.localization.title.DE}</h3>
//             </li>
//             <p>{scholarship.advancement.value.title.DE}</p>

//             <li>
//               <h3>{scholarship.advancementDetail.localization.title.DE}</h3>
//             </li>
//             <p>{scholarship.advancementDetail.value.title.DE}</p>

//             <li>
//               <h3>{scholarship.advancementTime.localization.title.DE}</h3>
//             </li>
//             <p>{scholarship.advancementTime.value.title.DE}</p>
//           </ul>
//           {/* <ul>
//                     //provider
//                     <li><h3>{scholarship.provider.localization.title.DE}</h3></li>
//                     <p>{scholarship.provider.value.name}</p>
//                     //link
//                     <li><h3>{scholarship.link.localization.title.DE}</h3></li>
//                     <p>{scholarship.link.value}</p>
//                     //occupation
//                     <li><h3>{scholarship.occupation.localization.title.DE}</h3></li>
//                     <p>{scholarship.occupation.value === null?"Keine Beschr??nkung":scholarship.occupation.value}</p>
//                     //semester
//                     <li><h3>{scholarship.semester.localization.title.DE}</h3></li>
//                     <p>{scholarship.semester.value}</p>
//                     //graduation
//                     <li><h3>{scholarship.graduation.localization.title.DE}</h3></li>
//                     {scholarship.graduation.value.map(val => <p>{val.title.DE}</p>)}
//                     //course
//                     <li><h3>{scholarship.course.localization.title.DE}</h3></li>
//                     {scholarship.course.value.map(val => <p>{val.title.DE}</p>)}
//                     //country
//                     <li><h3>{scholarship.country.localization.title.DE}</h3></li>
//                     <p>{scholarship.country.value  === null?"Keine Beschr??nkung":scholarship.country.value}</p>
//                     //city
//                     <li><h3>{scholarship.city.localization.title.DE}</h3></li>
//                     <p>{scholarship.city.value  === null?"Keine Beschr??nkung":scholarship.city.value}</p>
//                     //state
//                     <li><h3>{scholarship.state.localization.title.DE}</h3></li>
//                     <p>{scholarship.state.value  === null?"Keine Beschr??nkung":scholarship.state.value}</p>

//                     <li><h3>{scholarship.semester.localization.title.DE}</h3></li>
//                     <p>{scholarship.semester.value}</p>
//                 </ul> */}
//         </div>
//       </div>
