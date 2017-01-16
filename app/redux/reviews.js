import axios from 'axios';
import { browserHistory } from 'react-router';

/* --------------    ACTION CONSTANTS    ---------------- */

const ADD_REVIEW       = 'ADD_REVIEW'
const EDIT_REVIEW      = 'EDIT_REVIEW'
const EDIT_RATING      = 'EDIT_RATING'
const EDIT_COMMENT     = 'EDIT_COMMENT'
const UPVOTE_COMMENT   = 'UPVOTE_COMMENT'
const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
const REMOVE_REVIEW    = 'REMOVE_REVIEW'
const GET_USER_COMMENTS= 'GET_USER_COMMENTS'
const SELECT_COMMENT   = 'SELECT_COMMENT'

/* --------------    ACTION CREATORS    ----------------- */

const addReview = comment => ({ type: ADD_COMMENT, comment });
const editComment = comments => ({ type: EDIT_COMMENT, comments });
const editRating = comments => ({ type: EDIT_COMMENT, comments });
const editReview = comments => ({ type: EDIT_COMMENT, comments });
const removeComment  = comments => ({ type: REMOVE_COMMENT, comments });
const getUserComments = comments => ({ type: GET_USER_COMMENTS, comments });
const upvoteComment = comment => ({ type: GET_USER_COMMENTS, comments });
const downvoteComment = comment => ({ type: GET_USER_COMMENTS, comments });
const SelectComment = comments => ({ type: GET_USER_COMMENTS, comments });

/* ------------------    REDUCER    --------------------- */

var defaultState = {
	list:[]
	selected:{
		id: 0
		productRating: '',
		body: '',
		upvote: '',
		downvote: '',
		rating: 1,
	}
}

export default function (prev = defaultState, action){
	const nextStore = obj => Object.assign({}, prev, obj)
	switch (action.type){
		case ADD_COMMENT:
			return nextStore({comments: action.comments})
		case EDIT_COMMENT:
			return nextStore({comments: action.comments})
		case GET_USER_COMMENTS:
			return nextStore({comments: action.comments})
		case REMOVE_COMMENT:
			return nextStore({comments: action.comments})
		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const fetchUserComments = user => dispatch => {
  axios.get(`/api/comments/${user.id}`)
  .then(res => dispatch(getUserOrders(res.data)))
  .catch(err => console.error('Problem fetching user\'s comments', err));
};

export const AddNewComment = (comment) => dispatch => {
  axios.post(`/api/comments`, comment)
  .then(res => dispatch(addComment(res.data)))
  .catch(err => console.error('Problem adding new comment', err));
};

// // optimistic
// export const removeUser = id => dispatch => {
//   dispatch(remove(id));
//   axios.delete(`/api/users/${id}`)
//        .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
// };

// export const addUser = user => dispatch => {
//   axios.post('/api/users', user)
//        .then(res => dispatch(create(res.data)))
//        .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
// };

// export const updateUser = (id, user) => dispatch => {
//   axios.put(`/api/users/${id}`, user)
//        .then(res => dispatch(update(res.data)))
//        .catch(err => console.error(`Updating user: ${user} unsuccesful`, err));
// };

