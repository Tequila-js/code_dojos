'use strict';

import React from 'react'
import Axios from 'axios';

import Loader from '../../Component/Loader';
import Kata from '../../Component/Kata/';

export default class Katas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {katas: '', name: ''}
  }

  componentDidMount() {
    this.getListOfKatas();
  }

  getListOfKatas() {
    Axios.get('https://api.github.com/orgs/Tequila-js/repos')
      .then(response => {
        let katas = response.data
            .filter(kata => (kata.name.includes('kata-')))
            .map(kata => (<Kata kata={kata} key={kata.id}/>));

        this.setState({katas: katas});
      });
  }

  render() {
    return (
      <section>
        <div>
          <h1>Katas</h1>
          {this.state.katas.length? this.state.katas: <Loader/>}
        </div>
        {this.props.children}
      </section>
    )
  }
}
