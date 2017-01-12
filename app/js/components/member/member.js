'use strict';

import React from 'react';

require('./member.scss');

class Member extends React.Component {
  constructor() {
    super();
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
                  <br/>
                  <br/>
                  <a href={props.url} className="button button-green">Check profile</a>
                </p>
              </div>
            </div>)
  }
}

export default Member;
