import InitialState from "./initialState";

const {
  USER_INPUT_CHANGE,
  REFRESH_ALL_VALIDATION,
  USER_INPUT_REINIT
} = require('../../lib/constants').default;


const initialState = new InitialState();


export default function reducer(state = initialState, action) {
  if (!(state instanceof InitialState) || (state === undefined)) return initialState.mergeDeep(state);

  switch (action.type) {
    case USER_INPUT_CHANGE: {
      return state.setIn([action.payload.inputType, 'value'], action.payload.value)
        .setIn([action.payload.inputType, 'valid'], action.payload.valid)
        .setIn([action.payload.inputType, 'validationError'], action.payload.validationError)
    }

    case REFRESH_ALL_VALIDATION: {
      return state.setIn(['name', 'valid'], action.payload.name.valid)
        .setIn(['name', 'validationError'], action.payload.name.validationError)
        .setIn(['email', 'valid'], action.payload.email.valid)
        .setIn(['email', 'validationError'], action.payload.email.validationError)
        .setIn(['emailConfirmation', 'valid'], action.payload.emailConfirmation.valid)
        .setIn(['emailConfirmation', 'validationError'], action.payload.emailConfirmation.validationError)
    }

    case USER_INPUT_REINIT: {
      return initialState;
    }

    default:
      return state;
  }
}