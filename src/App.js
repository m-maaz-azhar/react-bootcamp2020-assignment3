import React from 'react';
import './App.css';

function HelloWorld(props) {
  return <div className='centered'> 
        <p>Hello <strong>{props.name}</strong></p> 
        <h1>React - Bootcamp 2020 - Assignment 03</h1>
        <img src='https://source.unsplash.com/600x400/?programming'></img>
        <ul>
        <h3>List</h3>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
        <h3>JS Expression</h3>
        <p>3 X 3 = {3 * 3 }</p>
  </div>
  
}
export default HelloWorld;
