'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

import Header from './Component/Header';
import Members from './Scenario/Members';
import Katas from './Scenario/Katas'
import Details from './Scenario/Details'
import NotFoundPage from './Component/NotFoundPage';

function NotFound () {
	return <h1>Not found</h1>;
}

function App (props) {
	return (
		<main>
			<Header />
		  {props.children}
	  </main>
	);
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/description/:kataName" component={Details}/>
      <Route path="/katas" component={Katas}/>
      <Route path="/members" component={Members} />
	  <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
), document.getElementById('app-container'));
