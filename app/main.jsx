'use strict'
require('APP/public/style.scss')
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './redux/store'
import AppContainer from './containers/AppContainer'
import LoginFormContainer from './containers/LoginFormContainer'

import AllShoesContainer from './containers/AllShoesContainer'
import CartContainer from './containers/CartContainer'
import ConfirmOrderContainer from './containers/ConfirmOrderContainer'

import {fetchPendingOrder} from './redux/orders'

const exampleUser = {id: 1}

render (
  <Provider store={store}>
    <Router history={browserHistory}>

    <Route path="/" component={AppContainer}>
      <Route path='/allshoes' component={AllShoesContainer} />
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/cart" component={CartContainer} onEnter={store.dispatch(fetchPendingOrder(exampleUser))} />
      <Route path="/confirm" component={ConfirmOrderContainer} onEnter={store.dispatch(fetchPendingOrder(exampleUser))} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
