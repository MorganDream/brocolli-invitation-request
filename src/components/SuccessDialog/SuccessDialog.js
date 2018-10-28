import React from 'react';
import './SuccessDialog.css';

class SuccessDialog extends React.Component {
  render() {
    return (
      <div className='success-dialog'>
        <div className='success-dialog-description-container'>
          <div className='success-dialog-description'>You will be one of the first to experience Broccoli & Co. when we launch.</div>
        </div>
        <div className='success-dialog-button-container'>
          <button className='success-dialog-button' onClick={this.props.onOKButtonClicked}>OK</button>
        </div>
      </div>

    )
  }
}

export default SuccessDialog;