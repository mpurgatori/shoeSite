import React, { Component } from 'react';
import axios from 'axios';
import ShoeOrderCard from './ShoeOrderCard';

		

export default (props) => {

		const arrToMap = props.pendingOrder.shoe_inventories

		return (

			<div>
			{ arrToMap ? (
				arrToMap.map( shoe => <ShoeOrderCard key={shoe.id} props={shoe} />)
				) : null
			}
			</div>
			)
		
	}


