import axios from 'axios';
import { browserHistory } from 'react-router';

/* --------------    ACTION CONSTANTS    ---------------- */

const ADD_COMMENT       = 'ADD_COMMENT';
const EDIT_COMMENT      = 'EDIT_COMMENT';
const REMOVE_COMMENT    = 'REMOVE_COMMENT'
const GET_USER_COMMENTS = 'GET_USER_COMMENTS'

/* --------------    ACTION CREATORS    ----------------- */

const addComment = comments => ({ type: ADD_COMMENT, comments });
const editComment = comments => ({ type: EDIT_COMMENT, comments });
const removeComment  = comments => ({ type: REMOVE_COMMENT, comments });
const getUserComments = comments => ({ type: GET_USER_COMMENTS, comments });

/* ------------------    REDUCER    --------------------- */

var defaultState = {
	productRating: '',
	body: '',
	upvote: '',
	downvote: '',
}

export default function (prev = defaultState, action){
	switch (action.type){
		case ADD_COMMENT:
			return Object.assign({}, prev, {comments: action.comments})
		case EDIT_COMMENT:
			return Object.assign({}, prev, {comments: action.comments})
		case GET_USER_COMMENTS:
			return Object.assign({}, prev, {comments: action.comments})
		case REMOVE_COMMENT:
			return Object.assign({}, prev, {comments: action.comments})
		default: return prev
	}
}

/* --------------    THUNKS/DISPATCHERS    -------------- */

export const fetchUserComments = user => dispatch => {
  axios.get(`/api/comments/${user.id}`)
  .then(res => dispatch(getUserOrders(res.data)))
  .catch(err => console.error('Problem fetching user\'s comments', err));
};

// export const AddNewComment = comment => dispatch => {
//   axios.post(`/api/comments`)
//   .then(res => dispatch(addComment(res.data)))
//   .catch(err => console.error('Problem adding neew comment', err));
// };
