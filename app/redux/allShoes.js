import axios from 'axios';

const RECEIVE_SHOES = 'RECEIVE_SHOES';

export const receiveShoes = (filteredShoes) => {
  return {
    type: RECEIVE_SHOES,
    filteredShoes,
  }
}

export const filterAllShoes = (criteria) => {
  return dispatch => {
    axios.post('api/getfilteredshoes', {criteria} )
    .then(res => {
      console.log(res.data);
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
