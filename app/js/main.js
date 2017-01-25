'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

import Members from './Scenario/Members';
import Katas from './Scenario/Katas'
import Details from './Scenario/Details'

function NotFound () {
	return <h1>Not found</h1>;
}

function App (props) {
	return (
		<main>	
			<header>
		      <nav className="pure-g wrap-container">
		        <div className="pure-u-8-24">
		          <a href="/" className="brand-item">Coding Dojos</a>
		        </div>
		        <div className="pure-u-16-24">
		          <ul className="pure-g navigation-list">
		            <li className="pure-u-3-24 navigation-item">
		              <Link to="/katas">Katas</Link>
		            </li>
		            <li className="pure-u-3-24 navigation-item">
		              <Link to="/members">Members</Link>
		            </li>
		          </ul>
		        </div>
		      </nav>
		    </header>
		    {props.children}
	    </main>
	);
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/katas" component={Katas}>
        <Route path="/description/:kataName" component={Details}/>
      </Route>
      <Route path="/members" component={Members} />
	  <Route path="*" component={NotFound}/>      
    </Route>
  </Router>
), document.getElementById('app-container'));

/*


{
  let membersContainer = document.getElementById('members-container');
  let katasContainer = document.getElementById('katas-container');
  let detailContainer = document.getElementById('detail-container');

  if (membersContainer) {
    ReactDOM.render(<Members />, membersContainer);
  }
  if (katasContainer) {
    ReactDOM.render(<Katas />, katasContainer);
  }

   if (detailContainer) {
    ReactDOM.render(<Details />, detailContainer);
  }
}
*/