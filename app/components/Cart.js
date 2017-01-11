import React, { Component } from 'react';
import axios from 'axios';
// import ShoeCardOrder from './ShoeCardOrder';

export default class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			order: {
		        date: "2017-01-03",
		        tracking: "1779298016",
		        address: "123 N. Clark St, Chicago, IL 60622",
		        payment: "Credit Card",
		        status: "pending",
		        shoeInventoryIds: ["A small red boot", "a big blue boot", "high heels"]
		      }
		}
	}

	componentDidMount() {
		// get any order matching the user's ID with the status 'pending'
		// and set it to this.state.order
	}

	render() {
		return (
			<div>
			{this.state.order.shoeInventoryIds.map(shoe => <div><text> {shoe} </text></div>)}
			</div>
		)
	}
}