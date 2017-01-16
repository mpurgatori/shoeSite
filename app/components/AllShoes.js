import React from 'react';
import {Link} from 'react-router';
import AllShoesContainer from '../containers/AllShoesContainer';
import ShoeCard from './ShoeCard'

export default function (props) {

  const allShoes = props.allShoes;
  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1">AllShoes</h3>
      <div className="row">

        {
          allShoes && allShoes.map(shoeType => (
            <div key={shoeType.id}>
              <ShoeCard shoeModel={shoeType} />

            </div>
          ))
        }
      </div>
    </div>
  );
};
