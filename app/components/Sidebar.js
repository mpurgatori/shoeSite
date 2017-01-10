import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to={`/`}>Filter</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={`/`}>To be announced</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={`/`}>To be announced</Link>
        </h4>
      </section>
      <hr />
    </sidebar>
  );
}
