import axios from 'axios';
import { browserHistory } from 'react-router';

/* --------------    ACTION CONSTANTS    ---------------- */

const GET_USER_ORDERS   = 'GET_USER_ORDERS';
const GET_USER_CURRENT_ORDER   = 'GET_USER_CURRENT_ORDER';

/* --------------    ACTION CREATORS    ----------------- */

const getUserOrders = orders => ({ type: GET_USER_ORDERS, orders });
const getPendingOrder = order => ({ type: GET_USER_CURRENT_ORDER, order });


/* ------------------    REDUCER    --------------------- */

var defaultState = {
	orders: [],
	pending: null
}

export default function (prev = defaultState, action){
	switch (action.type){
		case GET_USER_ORDERS:
			return Object.assign({}, prev, {orders: action.orders})


		case GET_USER_CURRENT_ORDER:
			return Object.assign({}, prev, {pending: action.order})

		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const fetchUserOrders = user => dispatch => {
  axios.get(`/api/orders/${user.id}`)
  .then(res => dispatch(getUserOrders(res.data)))
  .catch(err => console.error('Problem fetching user\'s orders', err));
};


export const fetchPendingOrder = user => dispatch => {
  axios.get(`/api/orders/pending/${user.id}`)
  .then(res => dispatch(getPendingOrder(res.data)))
  .catch(err => console.error('Problem fetching user\'s orders', err));
};