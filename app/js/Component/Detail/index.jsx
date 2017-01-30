
'use strict';

import React from 'react';

const kataItem = {
  background: '#fff',
  border: '0.1rem solid #eee',
  color: '#999',
  padding: '1rem',
  margin: 'auto',
  width: '80%'
};

function Detail(props) {
  return (
    <div style={kataItem}>
      <h2>{props.detail.name}</h2>
      <h3>Description</h3>
      <p>{props.detail.description}</p>
    </div>
  );
}

export default Detail;
