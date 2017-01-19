'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Members from './Scenario/Members';

{
  let membersContainer = document.getElementById('members-container');

  if (membersContainer) {
    ReactDOM.render(<Members />, membersContainer);
  }
}
