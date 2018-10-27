import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-inner'>
          <text className='footer-inner-text'>Make With ♥ in Melbourne.</text>
          <text className='footer-inner-text'>© 2016 Broccolo & Co.  All rights reserved.</text>
        </div>
      </footer>
    )
  }
}

export default Footer;