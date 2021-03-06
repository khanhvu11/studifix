import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import FilterPage from './FilterPage/FilterPage'
import ScholarshipsPage from './ScholarshipsPage/ScholarshipsPage'
import ApplyingProcess from './ApplyingProcess/ApplyingProcess'
import Review from './Review/Review'
import './FilterPage/filterPage.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={FilterPage}/>
      <Route path="/scholarshipsPage" component={ScholarshipsPage}/>
      <Route path="/applying" component={ApplyingProcess}/>
      <Route path="/review" component={Review}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
