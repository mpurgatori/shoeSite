import React, {Component} from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import {filterAllShoes} from '../redux/allShoes'

const mapStateToProps = function (state, ownProps) {
  return {};
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {
    filterShoes: function (filterInfo, e) {
      e.preventDefault();
      let filterCriteria = {
        color: filterInfo.color,
        size: filterInfo.size,
        price: filterInfo.price,
      }
      dispatch(filterAllShoes(filterCriteria))
    }
  }
}

class SC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [],
      size: [],
      price: [],
      filterShoes: props.filterShoes
    }
    this.addToFilter = this.addToFilter.bind(this);
  }

  addToFilter(filterItem, filterValue) {
    const nextState = Object.assign({}, this.state);
    const arrayPopValue = nextState[filterItem].indexOf(filterValue)

    if(arrayPopValue === -1) {
      nextState[filterItem] = [...nextState[filterItem], filterValue]
      this.setState({[filterItem]: nextState[filterItem]});

    } else {
      let before = nextState[filterItem].slice(0, arrayPopValue);
      let after = nextState[filterItem].slice(arrayPopValue + 1);

      nextState[filterItem] = [...before, ...after];
      this.setState({[filterItem]: nextState[filterItem]});
    }
  }

  render() {
    return (
      <Sidebar
        color={this.state.color}
        size={this.state.size}
        price={this.state.price}
        addToFilter={this.addToFilter}
        filterShoes={this.state.filterShoes}/>
    );
  }
}
const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SC);

export default SidebarContainer;
