import React from 'react';
import './RequestInviteForm.css';
import FormInput from "./FormInput";

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actions from '../../reducers/userInputs/actions';
import { STAGES } from '../../reducers/stage/initialState';

function mapStateToProps(state) {
  return {
    stage: state.mainFlow.stage,
    serverErrorMessage: state.mainFlow.serverErrorMessage,
    userInputs: state.userInputs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class RequestInviteForm extends React.Component {
  constructor(props) {
    super(props);
    this.onInputAction.bind(this);
  }

  render() {
    return (
      <div className='request-invite-form'>
        <div className='request-invite-input-group'>
          <FormInput classes='form-input' type="text" key={"name"}
                     name={"name"}
                     onInputAction={this.onInputAction}
                     placeholder="Full Name" required={true}
                     valid={this.props.userInputs.name.valid}
                     validationError={this.props.userInputs.name.validationError}/>

          <FormInput classes='form-input' type="email" key={"email"}
                     name={"email"}
                     onInputAction={this.onInputAction}
                     placeholder="Email" required={true}
                     valid={this.props.userInputs.email.valid}
                     validationError={this.props.userInputs.email.validationError}/>

          <FormInput classes='form-input' type="email" key={"email_confirmation"}
                     name={"emailConfirmation"}
                     onInputAction={this.onInputAction}
                     placeholder="ConFirm Email" required={true}
                     valid={this.props.userInputs.emailConfirmation.valid}
                     validationError={this.props.userInputs.emailConfirmation.validationError}/>
        </div>
        <div className='request-invite-form-button-container'>
          <button disabled={this.computeSendButtonStatus_()}
            onClick={this.onSendButtonClicked_.bind(this)} className='request-invite-form-button'>
            {
              this.props.stage === STAGES.SENDING_REQUEST?
                'Sending Request...' : 'Send'
            }
          </button>
        </div>
        {
          this.props.stage === STAGES.REGISTER_ERROR &&
            <div className='server-error-log-container'>
              <label className="server-error-log">{this.props.serverErrorMessage}</label>
            </div>
        }
      </div>
    )
  }

  computeSendButtonStatus_ = () => {
    return !(this.props.userInputs.name.valid &&
      this.props.userInputs.email.valid &&
      this.props.userInputs.emailConfirmation.valid) || this.props.stage === STAGES.SENDING_REQUEST
  }

  onSendButtonClicked_ = e => {
    this.props.actions.onSendButtonClicked(this.props.userInputs.name.value,
      this.props.userInputs.email.value,
      this.props.userInputs.emailConfirmation.value);
  }

  onInputAction = (value, name) => {
    if (name!= 'emailConfirmation') {
      this.props.actions.onUserInputChange(name,value)
    } else {
      this.props.actions.onUserInputChange(name, value, this.props.userInputs.email.value)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestInviteForm);