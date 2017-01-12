import React, {Component} from 'react';
import { connect } from 'react-redux';
import SingleShoe from '../components/SingleShoe.jsx';
import axios from 'axios';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const SingleShoeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleShoe);

export default SingleShoeContainer;
