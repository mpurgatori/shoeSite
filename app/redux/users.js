import axios from 'axios';
import { browserHistory } from 'react-router';

/* --------------    ACTION CONSTANTS    ---------------- */

const SET_ADDRESS   = 'SET_ADDRESS';
const SET_FULL_NAME = 'SET_FULL_NAME';
const SET_PASSWORD  = 'SET_PASSWORD';
const GET_USER_DATA = 'GET_USER_DATA';
const GET_ALL_USERS = 'GET_ALL_USERS';
const ADD_USER      = 'ADD_USER';
const REMOVE_USER   = 'REMOVE_USER';

/* --------------    ACTION CREATORS    ----------------- */

const setAddress = address => ({ type: SET_ADDRESS, address });
const setFullName = fullName => ({ type: SET_FULL_NAME, fullName });
const deleteUser  = user => ({ type: REMOVE_USER, user });
const getUserData  = user => ({ type: GET_USER_DATA, user });
const getAllUsers  = users => ({ type: GET_ALL_USERS, users });
const createUser  = user => ({ type: ADD_USER, user });
//const setPassord = user => ({ type: SET_PASSWORD, blah });

/* ------------------    REDUCER    --------------------- */

var defaultState = {
	allUsers:[],
	currentUser:{
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		admin: false,
	}
}

export default function (prev = defaultState, action){
	switch (action.type){
		case SET_ADDRESS:
			return Object.assign({}, prev, {currentUser: {address: action.address}})
		case SET_FULL_NAME:
			return Object.assign({}, prev, {currentUser: action.fullName})
		case GET_USER_DATA:
			return Object.assign({}, prev, {currentUser: action.user})
		case GET_ALL_USERS:
			return Object.assign({}, prev, {allUsers: action.users})
		case REMOVE_USER:
			return Object.assign({}, prev, {users: action.users})
		case ADD_USER:
			return Object.assign({}, prev, action.user)
		// case SET_PASSWORD:
		// 	return Object.assign({}, prev, action.password)
		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const updateAddress = (userId, address) => dispatch => 
    axios.put(`/api/users/${userId}`, {address})
       .then(res => dispatch(setAddress(res.data.address)));

export const updateName = (userId, firstName, lastName) => dispatch => 
    axios.put(`/api/users/${userId}`, {firstName, lastName})
   .then(res => dispatch(updateFullName(
       	{firstName: res.data.firstName,
       	 lastName: res.data.lastName })))
   .catch(err => console.error(`Updating name unsuccessful`, err))

export const removeUser = id => dispatch => 
	dispatch(deleteUser(id));
	axios.delete(`/api/users/${id}`)
    .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));

export const fetchAllUsers = () => dispatch => 
    axios.get('/api/users')
   .then(res => dispatch(getAllUsers(res.data)))
   .catch(err => console.error(`Retrieving user list unsuccesful`, err));

export const fetchUserData = (id, user) => dispatch => 
  	axios.get(`/api/users/${id}`, user)
   .then(res => dispatch(getUserData(res.data)))
   .catch(err => console.error(`Retrieving data for user ${id} unsuccesful`, err));


