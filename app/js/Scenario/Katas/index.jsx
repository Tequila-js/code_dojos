'use strict';

import React from 'react'
import Axios from 'axios';

import {GridList} from 'material-ui/GridList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Loader from '../../Component/Loader';
import Kata from '../../Component/Kata/';

const timer = 30;

export default class Katas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { katas: [] };
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  componentDidMount() {
    Axios.get('https://api.github.com/orgs/Tequila-js/repos')
      .then(response => {
        let katas = response.data
            .filter(kata => (kata.name.includes('kata-')));

        this.setState({katas: katas});
      });
  }

  render() {
    return (
      <div className="wrap-container">
      {
        this.state.katas.length? this.generateKataList(): <Loader/>
      }
      </div>
    );
  }

  generateKataList() {
    return (
      <section>
      {
        this.state.katas.map((item, index) => <Kata key={index} name={item.name} />)
      }
      </section>
    );
  }
}

Katas.childContextTypes = {
  muiTheme: React.PropTypes.object
}
