import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;