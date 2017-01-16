import axios from 'axios';
import { browserHistory } from 'react-router';
import store from './store';

/* --------------    ACTION CONSTANTS    ---------------- */

const GET_USER_ORDERS = 'GET_USER_ORDERS';
const SELECT_ORDER = 'SELECT_ORDER'
const GET_USER_CURRENT_ORDER = 'GET_USER_CURRENT_ORDER';

/* --------------    ACTION CREATORS    ----------------- */

const get_user_orders = orders => ({ type: GET_USER_ORDERS, orders });
const select_order = shoes => ({ type: SELECT_ORDER, shoes });
const getPendingOrder = order => ({ type: GET_USER_CURRENT_ORDER, order });

/* ------------------    REDUCER    --------------------- */

var defaultState = {
   orders: [],
   pending: {},
   selected: {},
}
export default function (order = defaultState, action){
   const nextStore = obj => Object.assign({}, order, obj)
   switch (action.type){
      case GET_USER_ORDERS: return nextStore({orders: action.orders})
      case SELECT_ORDER: return nextStore({selected: action.shoes})
      case GET_USER_CURRENT_ORDER:
         return Object.assign({}, order, {pending: action.order})
      default: return order
   }
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const getUserOrders = id => dispatch => {
   axios.get(`/api/orders/`, {id}) 
   .then(res => dispatch(get_user_orders(res.data)))
   .catch(err => console.error(`Problem fetching orders for user: ${id}`, err));
};

export const getOrderDetails = id => dispatch => {
   axios.get(`/api/orders/${id}`) 
   .then(res => dispatch(select_order(res.data)))
   .catch(err => console.error(`Problem fetching order: ${id}`, err));
};

export const fetchPendingOrder = user => dispatch => {
   console.log("DISPATCH: ", dispatch);
   axios.get(`/api/orders/pending/${user.id}`)
   .then(res => dispatch(getPendingOrder(res.data)))
   .catch(err => console.error('Problem fetching user\'s orders', err));
};
