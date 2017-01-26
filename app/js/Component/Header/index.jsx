import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
  anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
    <MenuItem>
      <Link to="/katas">Katas</Link>
    </MenuItem>
    <MenuItem>
			<Link to="/members">Members</Link>
		</MenuItem>
  </IconMenu>
);

Menu.muiName = 'IconMenu';

class Header extends React.Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(getMuiTheme)
    };
  }

  render() {
    return <AppBar title={this.props.name} iconElementRight={<Menu />} style={{'width': '100%'}} />
  }
};

Header.childContextTypes = {
  muiTheme: React.PropTypes.object
}

injectTapEventPlugin();

export default Header;
