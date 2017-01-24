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
      <a href={`detail.html?name=${props.kata.name}`}>{props.kata.name}</a>
    </li>
  )
}

export default Kata;
