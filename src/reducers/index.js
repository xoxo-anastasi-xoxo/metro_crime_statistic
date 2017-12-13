import { combineReducers } from 'redux'
import metro from './metro'
import page from './page'

const rootReducer = combineReducers({
  metro,
  page
});

export default rootReducer;