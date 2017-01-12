import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox1">Color</label>
        </h4>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'Red')}} /> Red</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'Blue')}} /> Blue</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'Green')}} /> Green</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'Black')}} /> Black</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'White')}} /> White</p>
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox2">Size</label>
        </h4>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 12)}}/> 12</p>
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox3">Price</label>
        </h4>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox3" value="second_checkbox"
          onChange={() => {props.addToFilter('price', 59.99)}}/> 59.99</p>
      </section>
      <button className="btn btn-primary" style={{marginLeft: 25, marginBottom: 10}} onClick={(e) => {
        props.filterShoes(props, e)
        // document.location.href = '/allshoes'
      }}>Search</button>
      <hr />
    </sidebar>
  );
}
