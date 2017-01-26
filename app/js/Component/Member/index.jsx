'use strict';

import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Member extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  render() {
    return (
      <GridTile
        title={this.props.title}
        actionPosition="left" titlePosition="top"
      titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
        <img src={this.props.img} />
      </GridTile>
    )
  }
}

Member.childContextTypes = {
  muiTheme: React.PropTypes.object
}

Member.propTypes = {
  title: React.PropTypes.string.isRequired,
  img: React.PropTypes.string
}
