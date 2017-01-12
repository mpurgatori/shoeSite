import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  let shoe = props.props;

// Assume we have a shoe object with all of these keys:
// Brand
// name
// style
// image_url
// description
// country of origin
// rating
// gender
// Size
// Color
// Price
// modelId
// id

  return (
    <div>
      <div className="row thumbnail">
        <div key={ shoe.id }>
          <div className="col-xs-4">
              <img src={shoe.image_url} style={{ height: 200, width: 200 }} />
          </div>
          <div className="col-xs-8">
            <Link  to={`allshoes/2/${shoe.id}`}>
                <p style={{fontSize: '1.6em'}}>
                  Name: {shoe.brand} { shoe.name }
                </p>
                <p style={{fontSize: '1.6em'}}>
                  Size: { shoe.size }
                </p>
                <p style={{fontSize: '1.6em'}}>
                  Color: { shoe.color }
                </p>
                <p style={{fontSize: '1.6em'}}>
                  Gender: { shoe.gender }
                </p>
                <p style={{fontSize: '1.6em'}}>
                  Price: { shoe.price }
                </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};