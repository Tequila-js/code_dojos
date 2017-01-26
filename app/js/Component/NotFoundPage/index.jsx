import React, { Component } from 'react';

class NotFoundPage extends Component {

  render() {
    const title = 'Page Not Found';
    return (
      <div>
        <h1>{title}</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }  
}

export default NotFoundPage;