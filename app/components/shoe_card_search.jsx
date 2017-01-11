import React from 'react';
import {Link} from 'react-router';

export default class ShoeCard extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div className='card'>
        <img src>IMAGE HERE</img>
        <h3>SHOE NAME</h3>
        <h3>SHOE PRICE</h3>
        <p>PRODUCT DESCRIPTION HERE</p>
        <p>PRODUCT RARING HERE</p>
      </div>
    )
  }
}
