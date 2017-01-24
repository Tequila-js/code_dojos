'use strict'

import React from 'react';
import Axios from 'axios';

import {GridList} from 'material-ui/GridList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../../Component/Header';
import Loader from '../../Component/Loader';
import Member from '../../component/Member';

const tequilaTeamMembers = 'https://api.github.com/orgs/Tequila-js/members';

export default class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  componentDidMount() {
    Axios(tequilaTeamMembers)
      .then(response => {
        this.setState({members: response.data});
      })
      .catch(e => {
        console.log(`Something goes wrong ${e}`, 'color: red');
      });
  }

  render() {
    return (
      <div>
        <Header name="Code Dojos"/>
        <section className="wrap-container">
          <h1>Coding Dojo Members</h1>
          {this.state.members.length? this.returnMembers(): <Loader/>}
        </section>
        </div>
      )
  }

  returnMembers() {
    return (
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
        <GridList style={{
          width: 500,
          height: 450,
          overflowY: 'auto',
        }}>
        {
          this.state.members.map((item, index) => <Member key={index} title={item.login} url={item.html_url} img={item.avatar_url}/>)
        }
        </GridList>
      </section>
    )
  }
}

Members.childContextTypes = {
  muiTheme: React.PropTypes.object
}
