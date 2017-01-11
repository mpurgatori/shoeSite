import React from 'react';
import {Link} from 'react-router';
import AllShoesContainer from '../containers/AllShoesContainer';

const exampleShoes = {
  shoes: [{brand: '', name: ''}]
}

export default function (props) {

  const allShoes = props.allShoes;
  console.log(allShoes);
  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1">AllShoes</h3>
      <div className="row">
        {
          allShoes && allShoes.map(shoe => (
            <div className="col-xs-10 col-xs-offset-1" key={ shoe.id }>
              <Link className="thumbnail" to={`/${props.user.id}/allshoes/${shoe.id}`}>
                <div className="caption">
                  <p style={{fontSize: '1.6em'}}>
                    <span>{ shoe.name }</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};
