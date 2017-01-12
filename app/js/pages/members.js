'use strict'

import React from 'react';
import Axios from 'axios';

import Loader from '../components/loader.js';

const tequilaTeamMembers = 'https://api.github.com/orgs/Tequila-js/members';

class Members extends React.Component {

  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    Axios(tequilaTeamMembers)
    .then(response => {
      this.setState({members: response.data});
    })
    .catch((e) => {
      console.log(`Something goes wrong ${e}`, 'color: red');
    });
  }

  render() {
    return (<section>
              <h1>Coding Dojo Members</h1>
              <ul> {this.state.members.length? this.returnMembers(): <Loader/>} </ul>
            </section>)
  }

  returnMembers() {
    return this.state.members.map((item, index) => (<li key={index}>{item.login}</li>));
  }

}

export default Members;
