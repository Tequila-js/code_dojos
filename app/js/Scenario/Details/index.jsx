'use strict';

import React from 'react'
import Axios from 'axios';
import marked from 'marked';

import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Loader from '../../Component/Loader';
import Detail from '../../Component/Detail';


const url = 'https://api.github.com/repos/Tequila-js';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      kata: {}
    };
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  componentDidMount() {
    let kataArray= this.props.location.pathname.split('/'),
        kata = kataArray[kataArray.length - 1];

    this.retrieveProjectInfo(kata);
    this.retrieveDescription(kata);
  }

  retrieveProjectInfo(repo = '') {
    Axios.get(`${url}/${repo}`)
      .then(response => {
        let data = response.data,
            kata = {};

        kata.url = data.html_url;

        this.setState(kata);
      });
  }

  retrieveDescription(repo = '') {
    Axios.get(`${url}/${repo}/contents/README.md`)
      .then(response => {
        this.setState({
          content: atob(response.data.content.replace(/↵/g, ''))
        });
      });
  }

  render() {
    return (
      <section className="wrap-container">
        {
          this.state.content? this.generateContent(): <Loader/>
        }
      </section>
    );
  }

  generateContent() {
    return (
      <Card>
        <CardText expandable={false}>
          <div dangerouslySetInnerHTML={{__html:marked(this.state.content)}} />
        </CardText>
        <CardActions>
          <FlatButton primary={true}>
            <Link to={`/katas`}>RETURN</Link>
          </FlatButton>
          <FlatButton label="Visit Repo" primary={true} href={this.state.kata.url}>
          </FlatButton>
        </CardActions>
      </Card>
    );
  }
}

Details.childContextTypes = {
  muiTheme: React.PropTypes.object
}
