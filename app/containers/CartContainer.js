import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state, ownProps) => {
  return {
  	pendOrder: state.order.pending
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;