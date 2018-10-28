'use strict';

import stageReducer from './stage/reducer';
import userInputReducer from './userInputs/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mainFlow:stageReducer,
  userInputs: userInputReducer,
})

export default rootReducer;