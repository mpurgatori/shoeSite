import { combineReducers } from 'redux';
import user from './user';
import orders from './orders';
import comment from './review';
import shoes from './allShoes';
import auth from './auth';

export default combineReducers({
	user,
	orders,
	comment,
	shoes,
	auth,
});