'use strict';

import React from 'react';

require('./member.scss');

export default class Member extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    return (<div className="member"
              style={{
                backgroundImage: `url(${props.avatar})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'black',
                backgroundPosition: '50% 50%',
                backgroundSize: 'contain'
              }}>
              <div className="member-panel">
                <p>
                  <span className="member-name">{props.name}</span>
                </p>
                <p>
                  <a target='_blank' href={props.url} className="button button-green">Check profile</a>
                </p>
              </div>
            </div>)
  }
}

Member.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string
}
