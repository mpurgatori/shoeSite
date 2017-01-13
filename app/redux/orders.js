import axios from 'axios';
import { browserHistory } from 'react-router';
import store from './store';

/* --------------    ACTION CONSTANTS    ---------------- */

const GET_USER_ORDERS   = 'GET_USER_ORDERS';
const GET_USER_CURRENT_ORDER   = 'GET_USER_CURRENT_ORDER';
const REMOVE_SHOE_FROM_ORDER = 'REMOVE_SHOE_FROM_ORDER';

/* --------------    ACTION CREATORS    ----------------- */

const getUserOrders = orders => ({ type: GET_USER_ORDERS, orders });
const getPendingOrder = order => ({ type: GET_USER_CURRENT_ORDER, order });
const removeShoeFromOrder = order => ({ type: REMOVE_SHOE_FROM_ORDER, order });


/* ------------------    REDUCER    --------------------- */

var defaultState = {
	orders: [],
	pending: {}
}

export default function (prev = defaultState, action){
	switch (action.type){
		case GET_USER_ORDERS:
			return Object.assign({}, prev, {orders: action.orders})
		case GET_USER_CURRENT_ORDER:
			return Object.assign({}, prev, {pending: action.order})
		case REMOVE_SHOE_FROM_ORDER:
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

export const removeShoe = (orderId, shoeInventoryId) => dispatch => {
  axios.delete(`/api/orders/pending/${orderId}/${shoeInventoryId}`)
  .then(res => dispatch(removeShoeFromOrder(res.data)))
  .catch(err => console.error('Cannot remove', err));
};
