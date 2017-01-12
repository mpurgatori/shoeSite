import React from 'react';
import {Link} from 'react-router';
import InputRange from 'react-input-range';
// require('react-input-range.css')

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
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
            onChange={() => {props.addToFilter('color', 'Brown')}} /> Brown</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
            onChange={() => {props.addToFilter('color', 'Grey')}} /> Grey</p>
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox2">Size</label>
        </h4>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 7)}}/> 7</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 7.5)}}/> 7.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 8)}}/> 8</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 8.5)}}/> 8.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 9)}}/> 9</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 9.5)}}/> 9.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 10)}}/> 10</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 10.5)}}/> 10.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 11)}}/> 11</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 11.5)}}/> 11.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 12)}}/> 12</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 13)}}/> 13</p>
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox3">Price</label>
        </h4>
        <InputRange
          maxValue={50}
          minValue={0}
          value={props.price}
          onChange={() => {props.handlePriceChange(value)}} />
      </section>
      <button className="btn btn-primary" style={{marginLeft: 25, marginBottom: 10}} onClick={(e) => {
        props.filterShoes(props, e)
        // document.location.href = '/allshoes'
      }}>Search</button>
      <hr />
    </sidebar>
  );
}

{/* <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox3" value="second_checkbox"
  onChange={() => {props.addToFilter('price', 59.99)}}/> 59.99</p> */}
