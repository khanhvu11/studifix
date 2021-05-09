import {React} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import FilterPage from './FilterPage/FilterPage'
import ScholarshipsPage from './ScholarshipsPage/ScholarshipsPage'
import './FilterPage/filterPage.css'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/filterPage" component={FilterPage}/>
      <Route path="/scholarshipsPage" component={ScholarshipsPage}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
