const {
  SHOW_REQUEST_INVITE_POPUP_REQUEST,
  HIDE_REQUEST_INVITE_POPUP_REQUEST,
  REQUEST_INVITE_SEND_REQUEST,
  REQUEST_INVITE_SEND_SUCCESS,
  REQUEST_INVITE_SEND_FAIL,
} = require('../../lib/constants').default;


export function showRequestInvitePopup() {
  return {
    type: SHOW_REQUEST_INVITE_POPUP_REQUEST
  }
}

export function hideRequestInvitePopup() {
  return {
    type: HIDE_REQUEST_INVITE_POPUP_REQUEST
  }
}

export function requestInviteSendRequest() {
  return {
    type: REQUEST_INVITE_SEND_REQUEST
  }
}

export function requestInviteSendSuccess(data) {
  return {
    type: REQUEST_INVITE_SEND_SUCCESS,
    payload: data
  }
}

export function requestInviteSendFail(error) {
  return {
    type: REQUEST_INVITE_SEND_FAIL,
    payload: error
  }
}