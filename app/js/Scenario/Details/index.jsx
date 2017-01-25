'use strict';

import React from 'react'
import Axios from 'axios';

import Loader from '../../Component/Loader';
import Detail from '../../Component/Detail';

const kataElementStyle = {
  background: '#fff',
  padding: '1rem',
  margin: 'auto',
  width: '80%'
};

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {kataList: ''};
  }

  componentDidMount() {    
    let kataName = this.props.location.pathname
                    .replace('description/', '');

    if (kataName) {
      this.getKataDetail(kataName);
    }
  }

  getKataDetail(nameKata = '') {
    Axios.get('https://api.github.com/orgs/Tequila-js/repos')
      .then(response => {
        let katas = response.data
            .filter(kata => kata.name == nameKata);

        this.setState({kataList: katas});
      });
  }

  render() {
    return (
      <section>
        <div style={kataElementStyle}>
          <h1>Details</h1>
        </div> 
        {
          this.state.kataList.length? this.generateList(): <Loader/>
        }
      </section>
    );
  }

  generateList() {
    return this.state.kataList.map(kata => <Detail detail={kata} key={kata.id} />);
  }
}
