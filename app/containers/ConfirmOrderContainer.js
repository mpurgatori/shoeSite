import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import ConfirmOrder from '../components/ConfirmOrder';

const mapStateToProps = (state, ownProps) => {
  return {
  	pendingOrder: state.orders.pending
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return { };
}

const ConfirmOrderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmOrder);

export default ConfirmOrderContainer;