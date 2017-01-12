import { combineReducers } from 'redux'
import shoeReducer from './allShoes';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  allShoes: shoeReducer,
})

export default rootReducer
