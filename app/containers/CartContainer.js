import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

const mapStateToProps = (state, ownProps) => {
  return {
  	pendingOrder: state.orders.pending
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartContainer;