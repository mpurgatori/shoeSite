import React, { Component } from 'react';
import axios from 'axios';
import ShoeOrderCard from './ShoeOrderCard';

		

export default class Cart extends Component {

	constructor(props) {
		console.log('___________________',props);
		super(props)
		}
	

	render() {
		return <ShoeOrderCard />

		}
		
}


