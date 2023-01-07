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
        <Link className='menu_flex' to="/"><p className='logo'>Pro<span>log<b>.</b></span></p></Link>
        <ul>
          <li>
            <Link className='menu_flex' to="/home">Home</Link>
          </li>
          <li className='dropdown' id='tech'>
            <Link className='menu_flex' to='/technology'>Technology<BiChevronDown /></Link>
            <div className='dropdown_menu' id="tech_menu">
              <Link to='/technology' className='sub_menu'>New Updates</Link><br />
              <Link to='/technology' className='sub_menu'>Artificial Intelligence</Link><br />
              <Link to='/technology' className='sub_menu'>BioTech</Link><br />
              <Link to='/technology' className='sub_menu'>Nano Technology</Link><br />
            </div>
          </li>
          <li className='dropdown' id='prog'>
            <Link className='menu_flex' to='/programming'>Programming<BiChevronDown /></Link>
            <div className='dropdown_menu' id='prog_menu'>
              <Link to='/programming' className='sub_menu'>New Programs</Link><br />
              <Link to='/programming' className='sub_menu'>JavaScript tips</Link><br />
              <Link to='/programming' className='sub_menu'>Computer Programming</Link><br />
              <Link to='/programming' className='sub_menu'>Assembly Languages</Link><br />
            </div>
          </li>
          <li>
            <Link className='menu_flex' to="/contact">Contact</Link>
          </li>
          <li className='dropdown' id='search'>
            <Link className='menu_flex'><BsSearch /></Link>
            <div className='search_field' id="search_f">
              <div className=''>
                <input type="" name="" /><Link className='search_btn'>Search</Link>
              </div>
            </div>
          </li>
        </ul>
        <Link className='btn_normal'>My account</Link>
      </div>

    </div>
  );
};

export default Header;