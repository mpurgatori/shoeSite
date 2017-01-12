'use strict'
require('APP/public/style.scss')
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import AppContainer from './containers/AppContainer'
import LoginForm from './components/LoginForm'

import AllShoesContainer from './containers/AllShoesContainer'
import Cart from './components/Cart'

import {fetchPendingOrder} from './react/orders'

render (
  <Provider store={store}>
    <Router history={browserHistory}>

    <Route path="/" component={AppContainer}>
      <Route path='/allshoes' component={AllShoesContainer} />
      <Route path="/login" component={LoginForm}/>
      <Route path="/cart" component={Cart} onEnter={fetchPendingOrder}/ >
    </Route>

    </Router>
  </Provider>,
  document.getElementById('main')
)
