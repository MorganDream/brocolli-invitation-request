'use strict';

const { Record } = require('immutable');

const InputValidation = Record({
  value: '',
  valid: true,
  validationError: ''
});

var InitialState = Record({
  name: new InputValidation(),
  email: new InputValidation(),
  emailConfirmation: new InputValidation(),
});

export default InitialState;