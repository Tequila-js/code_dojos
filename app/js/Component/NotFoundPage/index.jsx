import React, { Component } from 'react';

 const pageNotFound = {
  background: '#fff',
  border: '0.1rem solid #eee',
  color: '#999',
  padding: '1rem',
  margin: '5rem auto auto auto',
  width: '80%',
  textAlign: 'center',
  };

class NotFoundPage extends Component {

 

  render() {
    const title = 'Page Not Found';
    return (
      <div style={pageNotFound}>
          <h1>{title}</h1>
          <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }  
}

export default NotFoundPage;