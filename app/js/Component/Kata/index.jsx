import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Kata extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  render() {
    return (
      <Card>
        <CardTitle title={this.props.name} />
        <CardText expandable={false}> {this.props.description} </CardText>
        <CardActions>
          <FlatButton>
            <Link
              style={{
                padding: '0 16px',
                display: 'block'
              }}
            to={`description/${this.props.name}`}>
              Check
            </Link>
          </FlatButton>
        </CardActions>
      </Card>
    )
  }
}

Kata.childContextTypes = {
  muiTheme: React.PropTypes.object
}

 export default Kata;
