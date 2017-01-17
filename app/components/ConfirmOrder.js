import React, { Component } from 'react';
import axios from 'axios';
import ShoeOrderCard from './ShoeOrderCard';

		

export default (props) => {
		const arrToMap = props.pendingOrder.shoe_inventories;
		const order = props.pendingOrder;

		return (

			<div>
				{ arrToMap ? (
					arrToMap.map( shoe => <ShoeOrderCard key={shoe.id} shoe={shoe} order={order} />)
					) : null
				}
				<a href="#" className="btn btn-lg btn-success"> CONFIRM AND PLACE ORDER </a>
			</div>
			)
		
	}