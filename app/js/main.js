'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Members from './pages/members.js';
import Katas from './pages/Katas.js';

{
  let membersContainer = document.getElementById('members-container');
  let katasContainer = document.getElementById('katas-container');

  if (membersContainer) {
    ReactDOM.render(<Members />, membersContainer);
  }
  if (katasContainer) {
    ReactDOM.render(<Katas />, katasContainer);
  }
}
