'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Members from './pages/members.js';

{
  let membersContainer = document.getElementById('members-container');

  if (membersContainer) {
    ReactDOM.render(<Members />, membersContainer);
  }
}
