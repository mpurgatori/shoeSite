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
const removeUser  = user => ({ type: REMOVE_USER, user });
const getUserData  = user => ({ type: GET_USER_DATA, user });
const getAllUsers  = users => ({ type: GET_ALL_USERS, users });
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
			let newState = Object.assign({}, prev);
			newState.currentUser.address = action.address;
			return newState;
		case SET_FULL_NAME:
			return Object.assign({}, prev, {currentUser:action.fullName})
		case GET_USER_DATA:
			return Object.assign({}, prev, {currentUser:action.user})
		case GET_ALL_USERS:
			return Object.assign({}, prev, action.fullName)
		case REMOVE_USER:
			return Object.assign({}, prev, {users: action.users})
		// case SET_PASSWORD:
		// 	return Object.assign({}, prev, action.password)
		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */




