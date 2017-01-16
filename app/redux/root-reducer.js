import { combineReducers } from 'redux';
import users from './users';
import orders from './orders';
// import comments from './comments';
import shoes from './allShoes';
import auth from './auth';
import singleShoe from './singleShoe'

export default combineReducers({
	users,
	orders,
	// comments,
	shoes,
	auth,
	singleShoe
});
