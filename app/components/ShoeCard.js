import React from 'react';
import {Link} from 'react-router';

export default function (props) {

  console.log(props);
  const shoeModel = props.shoeModel;
  return (
    <div>
      <h3 className="col-xs-10 col-xs-offset-1"></h3>
      <div className="row">
        {
          shoeModel && shoeModel.shoe_inventories.map(shoe => (
            <div className="col-xs-10 col-xs-offset-1" key={ shoe.id }>
              <Link className="thumbnail" to={`allshoes/${shoeModel.id}/${shoe.id}`}>
                <div className="caption">
                  <img src={shoeModel.image_url} style={{ height: 200, width: 200}}/>
                  <p style={{fontSize: '1.6em'}}>
                    <span>{ shoeModel.name }</span>
                  </p>
                  <p style={{fontSize: '1.6em'}}>
                    <span>{ shoeModel.description }</span>
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
