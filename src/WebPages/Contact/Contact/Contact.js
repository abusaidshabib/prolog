import React from 'react';
import FirstContact from '../FirstContact/FirstContact';
import SecondSec from '../SecondSec/SecondSec';
import './Contact.css';

const Contact = () => {
  return (
    <div className='paddingBoth'>
      <FirstContact></FirstContact>
      <SecondSec></SecondSec>
    </div>
  );
};

export default Contact;