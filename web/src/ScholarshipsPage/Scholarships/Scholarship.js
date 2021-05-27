import React from 'react';
import ScholarshipModal from './ScholarshipModal';
import { Link } from 'react-router-dom';
import { GiMoneyStack } from 'react-icons/gi';
import { MdTimer } from 'react-icons/md';

import './scholarship.css';

export default function Scholarship({ scholarship }) {
  /* console.log(scholarship.graduation.map(val=>val.title.DE)) */
  const [modalShow, setModalShow] = React.useState(false);
  console.log(scholarship);

  return (
    <>
      <div className="card" onClick={() => setModalShow(true)}>
        <div className="imgContainer">
          <img className="picture" src={scholarship.imgURL.value} />
        </div>

        <div className="textContainer">
          <div className="text_upper">{scholarship.name}</div>

          <div className="text_lower">
            <div className="text_left">
              <div className="icon">
                <GiMoneyStack size="30px" />
              </div>
              <div className="description">
                {scholarship.advancement.value.title.DE}
              </div>
            </div>
            <div className="text_right">
              <div className="icon">
                <MdTimer size="30px" />
              </div>
              <div className="description">
                {scholarship.advancementTime.value.title.DE}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scholarship-outer">
        <ScholarshipModal
          scholarship={scholarship}
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
//                     <p>{scholarship.occupation.value === null?"Keine Beschränkung":scholarship.occupation.value}</p>
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
//                     <p>{scholarship.country.value  === null?"Keine Beschränkung":scholarship.country.value}</p>
//                     //city
//                     <li><h3>{scholarship.city.localization.title.DE}</h3></li>
//                     <p>{scholarship.city.value  === null?"Keine Beschränkung":scholarship.city.value}</p>
//                     //state
//                     <li><h3>{scholarship.state.localization.title.DE}</h3></li>
//                     <p>{scholarship.state.value  === null?"Keine Beschränkung":scholarship.state.value}</p>

//                     <li><h3>{scholarship.semester.localization.title.DE}</h3></li>
//                     <p>{scholarship.semester.value}</p>
//                 </ul> */}
//         </div>
//       </div>
