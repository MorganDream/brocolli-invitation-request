import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.modalContainer = document.getElementById('modal-container');
  }

  render() {
    return ReactDOM.createPortal(
      <div className='popup' id='popup' onClick={this.onClick_}>
        <div className='popup-inner' id='popup-inner'>
          <header className='popup-header'>
            <span>{this.props.caption}</span>
          </header>
          <div className='popup-body'>
            { this.props.children }
          </div>
        </div>
      </div>,
      this.modalContainer
    )
  }

  onClick_ = e => {
    if(e.target == document.getElementById('popup')) {
      this.props.onBlurAction();
    }
  }
}

export default Popup;