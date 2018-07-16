import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers';

const reducer = combineReducers({
  ...reducers
});

export const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
);
