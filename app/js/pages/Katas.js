import React from 'react'
import Loader from '../components/loader';
import Kata from '../components/Kata/Kata';
import Axios from 'axios';

class Katas extends React.Component {
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
        <h1>Katas</h1>
        {this.state.katas.length? this.state.katas: <Loader/>}
      </section>
    )
  }
}

export default Katas;
