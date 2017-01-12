import React, { Component } from 'react';
import axios from 'axios';
import ShoeOrderCard from './ShoeOrderCard';

		const exampleShoe = {
			brand: "Nike",
			name: "Air",
			style: "Athletic",
			image_url: "http://thethings3.imgix.net/wp-content/uploads/2016/04/26complex.jpg?auto=format&lossless=1&q=90&w=612&h=612&fit=crop",
			description: "nice",
			country_of_origin: "Panama",
			rating: 5,
			gender: "M",
			size: 11,
			color: "Red",
			price: 49.99,
			modelId: 2,
			id: 1
		};

export default class Cart extends Component {

	constructor(props) {
		super(props);
		this.state = {
			order: {
				shoes: [exampleShoe, exampleShoe, exampleShoe, exampleShoe, exampleShoe]
			},
		};
	}

	render() {
		return <ShoeOrderCard props={exampleShoe} />

		}
		
}


