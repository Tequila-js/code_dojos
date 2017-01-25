import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

const kataItem = {
  background: '#fff',
  border: '0.1rem solid #eee',
  color: '#999',
  display: 'inline-block',
  padding: '1rem',
  margin: '0.5rem',
  width: '20%'
};

function Kata(props) {
  return (
    <li style={kataItem}>
      <Link to={`description/${props.kata.name}`}>{props.kata.name}</Link>
    </li>
  )
}

export default Kata;
