'use strict'
require('APP/public/style.scss')
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './redux/store'
import AppContainer from './containers/AppContainer'
import LoginForm from './components/LoginForm'

import AllShoesContainer from './containers/AllShoesContainer'
import CartContainer from './containers/CartContainer'

import SingleShoe from './containers/SingleShoeContainer.js'


import {fetchPendingOrder} from './redux/orders'

const exampleUser = {id: 1}

render (
  <Provider store={store}>
    <Router history={browserHistory}>

    <Route path="/" component={AppContainer}>
      <Route path='/allshoes' component={AllShoesContainer} />
      <Route path="/allshoes/:shoemodelid" component={SingleShoe} />
      <Route path="/login" component={LoginForm} />
      <Route path="/cart" component={CartContainer} onEnter={store.dispatch(fetchPendingOrder(exampleUser))} />
    </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
