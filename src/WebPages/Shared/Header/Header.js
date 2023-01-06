import moment from 'moment';
import React from 'react';
import './Header.css';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {

  let newDate = new Date();
  console.log(newDate.getDate);
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <div className='nav_div'>
      {/* Upper Nav */}
      <div className='top_nav_div padding_both'>
        <p>{moment().format('Do MMMM YYYY, dddd')}</p>
        {/* moment.js */}
        <div className='social_icon_div'>
          <a rel='noreferrer' href="https://www.linkedin.com/in/abusaidshabib/" target="_blank" ><FaLinkedinIn /></a>
          <a rel='noreferrer' href="https://github.com/abusaidshabib" target="_blank"><FaGithub /></a>
          <a rel='noreferrer' href="https://www.facebook.com/abusaidshabibofficial" target="_blank"><FaFacebookF /></a>
          <a rel='noreferrer' href="https://twitter.com/abusaidshabib" target="_blank"><FaTwitter /></a>
          <a rel='noreferrer' href="https://www.instagram.com/abusaidshabibofficial/" target="_blank"><FaInstagram /></a>
        </div>
      </div>


      {/* Main Nav */}
      <div className='main_nav'>
        <p className='logo'>Pro<span>log<b>.</b></span></p>
        <ul>
          <li>Home</li>
          <li>Technology<BiChevronDown/></li>
          <li>Programming<BiChevronDown /></li>
          <li>Contact</li>
          <li>
            <BsSearch />
          </li>
        </ul>
        <Link className='btn_normal'>My account</Link>
      </div>

    </div>
  );
};

export default Header;