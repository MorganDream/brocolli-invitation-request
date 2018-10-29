import { STAGES } from "./initialState";
import InitialState from "./initialState";

const {
  SHOW_REQUEST_INVITE_POPUP_REQUEST,
  HIDE_REQUEST_INVITE_POPUP_REQUEST,
  REQUEST_INVITE_SEND_REQUEST,
  REQUEST_INVITE_SEND_SUCCESS,
  REQUEST_INVITE_SEND_FAIL,
} = require('../../lib/constants').default;


const initialState = new InitialState();


export default function reducer(state = initialState, action) {
  if (!(state instanceof InitialState) || (state === undefined)) return initialState.mergeDeep(state);

  switch (action.type) {
    case SHOW_REQUEST_INVITE_POPUP_REQUEST: {
      return state.set('stage', STAGES.USER_EDITTING);
    }

    case HIDE_REQUEST_INVITE_POPUP_REQUEST: {
      return state.set('stage', STAGES.INITIAL);
    }

    case REQUEST_INVITE_SEND_REQUEST: {
      return state.set('stage', STAGES.SENDING_REQUEST);
    }

    case REQUEST_INVITE_SEND_SUCCESS: {
      return state.set('stage', STAGES.REGISTER_SUCCESS);
    }

    case REQUEST_INVITE_SEND_FAIL: {
      return state.set('stage', STAGES.REGISTER_ERROR)
        .set('serverErrorMessage', action.payload);
    }

    default:
      return state;
  }
}
