import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import thunk from 'redux-thunk';
import { taskReducer } from './reducers/taskReducer';

const rootReducer = combineReducers({
  taskReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))