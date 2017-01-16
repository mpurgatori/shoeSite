import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  return (
    <sidebar>
      <section>
        <h4 className="menu-item" onClick={() => {props.click('colorToggle')}}>
          <label>Color</label>
        </h4>
        { props.colorToggle ? (
          <div>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox1" value="color"
              onChange={() => {props.addToFilter('color', 'Red')}} /> Red</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox2" value="color"
              onChange={() => {props.addToFilter('color', 'Blue')}} /> Blue</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox3" value="color"
              onChange={() => {props.addToFilter('color', 'Green')}} /> Green</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox4" value="color"
              onChange={() => {props.addToFilter('color', 'Black')}} /> Black</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox5" value="color"
              onChange={() => {props.addToFilter('color', 'White')}} /> White</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox6" value="color"
              onChange={() => {props.addToFilter('color', 'Brown')}} /> Brown</p>
            <p style={{marginLeft: 25}}><input type="checkbox" id="cbox7" value="color"
              onChange={() => {props.addToFilter('color', 'Grey')}} /> Grey</p>
          </div>
          ) : null }
      </section>
      <section>
        <h4 className="menu-item" onClick={() => {props.click('sizeToggle')}}>
          <label>Size</label>
        </h4>
        { props.sizeToggle ? (
          <div>
        <p style={{marginLeft: 25}}> <input type="checkbox" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 7)}}/> 7</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox8" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 7.5)}}/> 7.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox9" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 8)}}/> 8</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox10" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 8.5)}}/> 8.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbo11" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 9)}}/> 9</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox12" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 9.5)}}/> 9.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox13" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 10)}}/> 10</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox14" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 10.5)}}/> 10.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox15" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 11)}}/> 11</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox16" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 11.5)}}/> 11.5</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox17" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 12)}}/> 12</p>
        <p style={{marginLeft: 25}}> <input type="checkbox" id="cbox18" value="second_checkbox"
          onChange={() => {props.addToFilter('size', 13)}}/> 13</p>
        </div>
        ) : null }
      </section>
      <section>
        <h4 className="menu-item">
          <label htmlFor="cbox3">Price Range</label>
        </h4>
        <div>
          <div id="slider">
                   <input
                       name="pricing"
                       type="range"
                       min={props.sliderBar.min}
                       max={props.sliderBar.max}
                       step={1}
                       value={props.price}
                       onInput={(e) => {props.handlePriceChange(e)}}
                       onChange={(e) => {props.handlePriceChange(e)}}
                       id="price_id"
                       />
                   <span style={{ paddingLeft: 2}} >0 - {props.price}</span>
               </div>
        </div>
      </section>
      <button className="btn btn-primary" style={{marginLeft: 25, marginBottom: 10}} onClick={(e) => {
        props.filterShoes(props, e)
      }}>Search</button>
      <hr />
    </sidebar>
  );
}
