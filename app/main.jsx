'use strict'
require('APP/public/style.scss')
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import AppContainer from './containers/AppContainer'
import AllShoesContainer from './containers/AllShoesContainer'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
      <Route path='/allshoes' component={AllShoesContainer} />
        {/* <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} /> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
