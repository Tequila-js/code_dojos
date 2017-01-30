'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import {GridList} from 'material-ui/GridList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Loader from '../../Component/Loader';
import Member from '../../component/Member';

const timer = 30,
      tequilaTeamMembers = 'https://api.github.com/orgs/Tequila-js/members';

export default class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      cols: 3
    };
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  componentDidMount() {
    let self = this,
        resizeTimer = null;

    this.getGridCols();

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(self.getGridCols.bind(self), timer);
    })

    Axios(tequilaTeamMembers)
      .then(response => {
        this.setState({members: response.data});
      })
      .catch(e => {
        console.log(`%cSomething goes wrong ${e}`, 'color: red');
      });
  }

  render() {
    return (
      <div>
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
        <GridList
          cols={this.state.cols}
          style={{
          width: '100%',
          overflowY: 'auto',
        }}>
        {
          this.state.members.map((item, index) => <Member key={index} title={item.login} url={item.html_url} img={item.avatar_url} />)
        }
        </GridList>
      </section>
    )
  }

  getGridCols() {
    let width = window.innerWidth;

    if (width < 600) {
      this.setState({cols:2});
    } else if (width < 1000) {
      this.setState({cols:3});
    } else {
      this.setState({cols:4});
    }
  }
}

Members.childContextTypes = {
  muiTheme: React.PropTypes.object
}
