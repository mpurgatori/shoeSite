import React, {Component} from 'react';
import NavbarContainer from '../containers/NavbarContainer'
import SidebarContainer from '../containers/SidebarContainer'

const App = (props) => {
  return (
    <div>
      <NavbarContainer />
        <div>
          <div className="col-xs-2 sidebar" style={{marginTop: 50}}>
            <SidebarContainer />
          </div>
          <div className="col-xs-10" style={{marginTop: 50, marginBottom: 70}}>
            {
              props.children && React.cloneElement(props.children, props)
            }

          </div>
        </div>
    </div>

  );
}

export default App;
