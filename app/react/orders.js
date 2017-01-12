import axios from 'axios';
import { browserHistory } from 'react-router';

/* --------------    ACTION CONSTANTS    ---------------- */

const GET_USER_ORDERS   = 'GET_USER_ORDERS';

/* --------------    ACTION CREATORS    ----------------- */

const getUserOrders = orders => ({ type: GET_USER_ORDERS, orders });

/* ------------------    REDUCER    --------------------- */

var defaultState = {
	date: ''
	tracking: '',
	address: '',
	payment: '',
	status: '',
}

export default function (prev = defaultState, action){
	switch (action.type){
		case GET_USER_ORDERS:
			return Object.assign({}, prev, {orders: action.orders})
		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const fetchUserOrders = user => dispatch => {
  axios.get(`/api/orders/${user.id}`)
  .then(res => dispatch(getUserOrders(res.data)))
  .catch(err => console.error('Problem fetching user\'s orders', err));
};
