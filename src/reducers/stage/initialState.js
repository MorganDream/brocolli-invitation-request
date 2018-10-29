const { Record } = require('immutable');
export const STAGES = {
  INITIAL: 0,
  USER_EDITTING: 1,
  SENDING_REQUEST: 2,
  REGISTER_SUCCESS: 3,
  REGISTER_ERROR: 4,
};

var InitialState = Record({
  stage:STAGES.INITIAL,
  serverErrorMessage: ''
});

export default InitialState;