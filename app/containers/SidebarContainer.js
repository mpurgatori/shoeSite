import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = function (state, ownProps) {
  return {};
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {}
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
