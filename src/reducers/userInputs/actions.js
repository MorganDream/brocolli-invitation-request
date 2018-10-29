import { requestInviteSendRequest, requestInviteSendSuccess, requestInviteSendFail } from "../stage/actions";

const {
  USER_INPUT_CHANGE,
  REFRESH_ALL_VALIDATION,
  USER_INPUT_REINIT,
} = require('../../lib/constants').default;


const VALIDATION_ERROR= {
  NAME_BLANK: 'You Must Input a Name',
  NAME: 'Full Name must not be less than 3 characters',
  EMAIL_BLANK: 'You Must Input an Email',
  EMAIL: 'Email must contains @ symbol',
  EMAIL_CONFIRMATION_BLANK: 'You must confirm your email',
  EMAIL_CONFIRMATION: 'Email Confirmation must be same as Email'
};

function validateName(value) {
  return value.length >= 3;
}

function validateEmail(value) {
  return value.indexOf('@') >= 0;
}

function validateEmailConfirmation(value, emailValue) {
  return value === emailValue;
}

function validate(inputType, value, emailValue) {
  switch (inputType) {
    case 'name': {
      if (!value || value === '') {
        return {valid: false, validationError: VALIDATION_ERROR.NAME_BLANK}
      }
      return validateName(value) ?
        {valid:true} :
        {valid: false, validationError: VALIDATION_ERROR.NAME};
    }
    case 'email': {
      if (!value || value === '') {
        return {valid: false, validationError: VALIDATION_ERROR.EMAIL_BLANK}
      }
      return validateEmail(value) ?
        {valid: true} :
        {valid: false, validationError: VALIDATION_ERROR.EMAIL};
    }
    case 'emailConfirmation': {
      if (!value || value === '') {
        return {valid: false, validationError: VALIDATION_ERROR.EMAIL_CONFIRMATION_BLANK}
      }
      return validateEmailConfirmation(value, emailValue) ?
        {valid: true} :
        {valid: false, validationError: VALIDATION_ERROR.EMAIL_CONFIRMATION}
    }
    default:
      return {valid: true}
  }
}

function validateAll(name, email, emailConfirmation) {
  return new Promise((resolve, reject) => {
    if (validateName(name) && validateEmail(email) && validateEmailConfirmation(emailConfirmation, email)) {
      resolve();
    } else {
      reject({
        name: (!name || name === '') ? {valid: false, validationError: VALIDATION_ERROR.NAME_BLANK} :
          validateName(name) ?
          {valid:true} :
          {valid: false, validationError: VALIDATION_ERROR.NAME},
        email: (!email || email === '') ? {valid: false, validationError: VALIDATION_ERROR.EMAIL_BLANK} :
          validateEmail(email) ?
          {valid: true} :
          {valid: false, validationError: VALIDATION_ERROR.EMAIL},
        emailConfirmation: (!emailConfirmation || emailConfirmation === '') ? {valid: false, validationError: VALIDATION_ERROR.EMAIL_CONFIRMATION_BLANK} :
          validateEmailConfirmation(emailConfirmation, email) ?
          {valid: true} :
          {valid: false, validationError: VALIDATION_ERROR.EMAIL_CONFIRMATION}
      });
    }
  });
}

export function onUserInputChange(inputType, value, emailValue) {
  return {
    type: USER_INPUT_CHANGE,
    payload: Object.assign({
      value:value,
      inputType: inputType,
    }, validate(inputType, value, emailValue))
  }
}

function refreshAllValidation(payload) {
  return {
    type: REFRESH_ALL_VALIDATION,
    payload: payload
  }
}

function sendRequestInvite(name, email) {
  return new Promise((resolve, reject) => {
    try {
      var request = new XMLHttpRequest();
      request.open('POST', 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', true);
      request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
      request.send(JSON.stringify({ "name": name, "email": email }));

      request.onreadystatechange = function () {
        if(request.readyState === 1) {
          request.send();
        }

        if(request.readyState === 4) {
          if(request.status === 200) {
            console.log(request.responseText);
            resolve(request.responseText);
          } else {
            console.log(JSON.parse(request.responseText));
            reject(JSON.parse(request.responseText).errorMessage);
          }
        }
      };
    } catch (e) {
      console.log(e);
      reject(e);
    }
  })
}

export function onSendButtonClicked(name, email, emailConfirmation) {
  return dispatch => {
    return validateAll(name, email,emailConfirmation).then(() => {
      dispatch(requestInviteSendRequest());
      return sendRequestInvite(name, email).then(data => {
        dispatch(requestInviteSendSuccess(data));
      }).catch(error => {
        dispatch(requestInviteSendFail(error));
      })
    }).catch(validationResults => {
      if(!!validationResults && !!validationResults.name &&
        !!validationResults.email && !!validationResults.emailConfirmation) {
        dispatch(refreshAllValidation(validationResults));
      }
    });
  }
}

export function reInitInputs() {
  return {
    type: USER_INPUT_REINIT
  }
}