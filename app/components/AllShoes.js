import React from 'react';
import AllShoesContainer from '../containers/AllShoesContainer';
import ShoeCard from './ShoeCard'

export default function (props) {
  const allShoes = props.allShoes;
  return (
    <div>
      <div>

        {
          allShoes && allShoes.map(shoeType => {
            return (
              <ShoeCard key={shoeType.id} props={shoeType} />
            )
          })
        }
      </div>
    </div>
  );
};
