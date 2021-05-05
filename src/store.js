import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import searchReducer from '@reducers/searchReducer';
import modalReducer from '@reducers/modalReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  movieModal: modalReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store = createStore(rootReducer, composedEnhancer)