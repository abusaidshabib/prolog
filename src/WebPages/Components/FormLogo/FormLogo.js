import React from 'react';
import { Link } from 'react-router-dom';
import './FormLogo.css';

const FormLogo = () => {
  return (
    <div className='flogo_div'>
      <div>
        <img className='form_img' src='https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt=""/>
        <Link className='menu_flex' to="/"><p className='logo'>Pro<span>log<b>.</b></span></p></Link>
        <p className='small_para'>You can get a lots of knowledge about new technologies and other updates</p>
      </div>
    </div>
  );
};

export default FormLogo;