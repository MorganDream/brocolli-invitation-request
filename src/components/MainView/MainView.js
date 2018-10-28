import React from 'react';
import './MainView.css';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as stageActions from '../../reducers/stage/actions';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stageActions, dispatch)
  }
}

class MainView extends React.Component {
  render() {
    return (
      <div className='main-view'>
        <div className='main-view-box'>
          <div className='main-view-box-caption'>A better way to enjoy every day.</div>
          <div className='main-view-box-sub-caption'>Be the first to know when we launch.</div>
          <button className='main-view-box-invite-button' onClick={this.onRequestInviteButtonClicked_}>Request an Invite</button>
        </div>
      </div>
    )
  }

  onRequestInviteButtonClicked_ = e => {
    this.props.actions.showRequestInvitePopup();
  }
}

export default connect(null, mapDispatchToProps)(MainView);