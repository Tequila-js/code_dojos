'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Members from './Scenario/Members';
import Katas from './Scenario/Katas'
import Details from './Scenario/Details'
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
