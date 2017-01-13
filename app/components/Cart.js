import React, { Component } from 'react';
import axios from 'axios';
import ShoeOrderCard from './ShoeOrderCard';

		

export default (props) => {
		const arrToMap = props.pendingOrder.shoe_inventories;
		const order = props.pendingOrder;
		const removeShoe = props.removeShoe;

		return (

			<div>
			{ arrToMap ? (
				arrToMap.map( shoe => <ShoeOrderCard key={shoe.id} shoe={shoe} order={order} removeShoe={ removeShoe } />)
				) : null
			}
			</div>
			)
		
	}


