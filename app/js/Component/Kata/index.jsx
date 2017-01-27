import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
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
        <CardHeader
          title={this.props.name}
          actAsExpander={true}
        showExpandableButton={false} />
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
