import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainView from "./components/MainView";
import Popup from "./components/common/Popup";
import RequestInviteForm from "./components/RequestInviteForm";

import { connect } from "react-redux";
import { STAGES } from './reducers/stage/initialState';
import { bindActionCreators } from 'redux';
import * as stageActions from './reducers/stage/actions';
import SuccessDialog from "./components/SuccessDialog";

function mapStateToProps(state) {
  return {
    stage: state.mainFlow.stage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stageActions, dispatch)
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <MainView/>
        <Footer/>
        <div className='modal-parent'>
          {
            (this.props.stage === STAGES.USER_EDITTING ||
              this.props.stage === STAGES.SENDING_REQUEST ||
              this.props.stage === STAGES.REGISTER_ERROR) &&
            <Popup caption={'Request an Invite'} onBlurAction={this.onBlurAction}>
              <RequestInviteForm/>
            </Popup>
          }
          {
            this.props.stage === STAGES.REGISTER_SUCCESS &&
            <Popup caption={'All done!'} onBlurAction={this.onBlurAction}>
              <SuccessDialog onOKButtonClicked={this.onBlurAction} />
            </Popup>
          }
        </div>
      </React.Fragment>
    );
  }

  onBlurAction = () => {
    this.props.actions.hideRequestInvitePopup();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
