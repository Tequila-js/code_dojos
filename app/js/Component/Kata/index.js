import React from 'react';

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
      <a href={props.kata.html_url}>{props.kata.name}</a>
      <p>{props.kata.description}</p>
    </li>
  )
}

export default Kata;
