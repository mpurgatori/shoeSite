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
          onChange={() => {props.addToFilter('color', 'red')}} /> Red</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'blue')}} /> Blue</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'green')}} /> Green</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'black')}} /> Black</p>
          <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
          onChange={() => {props.addToFilter('color', 'white')}} /> White</p>
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox2">Size</label>
        </h4>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox2" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 'large')}}/> Large</p>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={`/`}>To be announced</Link>
        </h4>
      </section>
      <button className="btn btn-primary" style={{marginLeft: 25, marginBottom: 10}} onClick={() => {
        props.filterShoes(props)
      }}>Search</button>
      <hr />
    </sidebar>
  );
}
