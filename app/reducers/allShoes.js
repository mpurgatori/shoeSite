import axios from 'axios';

const RECEIVE_SHOES = 'RECEIVE_SHOES';

export const receiveShoes = (filteredShoes) => {
  return {
    type: RECEIVE_SHOES,
    filteredShoes,
  }
}

export const loadAllShoes = (filteredShoes) => {
  return dispatch => {
    axios.get('/api/shoes')
      .then(res => {
        dispatch(receiveShoes(res.data))
      })
  }
}

export const filterAllShoes = (criteria) => {
  return dispatch => {
    axios.post('api/shoes', {criteria} )
    .then(res => {
      dispatch(receiveShoes(res.data))
    })
  }
}

const initialShoesState = {
  shoes: [],
}

const shoeReducer = (state=initialShoesState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SHOES:
      nextState.shoes = action.filteredShoes;
      return nextState;
      break;
    default:
      return state;

  }
  return nextState;
}

export default shoeReducer;
