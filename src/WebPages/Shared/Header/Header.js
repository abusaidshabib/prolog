import moment from 'moment';
import React, { useState } from 'react';
import './Header.css';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  let newDate = new Date();
  console.log(newDate.getDate);
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  return (
    <div className='nav_div'>
      {/* Upper Nav */}
      <div className={`top_nav_div ${menu ? "position_fixed" : ""}`}>
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
      <div className={`main_nav ${menu ? "position_fixed" : ""}`}>
        <Link className='menu_flex' to="/"><p className='logo'>Pro<span>log<b>.</b></span></p></Link>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "menu_flex_active" : "menu_flex"}>Home</NavLink>
          </li>
          <li className='dropdown' id='tech'>
            <NavLink className={({ isActive }) => isActive ? "menu_flex_active" : "menu_flex"} to='/technology'>Technology<BiChevronDown /></NavLink>
            <div className='dropdown_menu' id="tech_menu">
              <Link to='/technology' className='sub_menu'>New Updates</Link><br />
              <Link to='/technology' className='sub_menu'>Artificial Intelligence</Link><br />
              <Link to='/technology' className='sub_menu'>BioTech</Link><br />
              <Link to='/technology' className='sub_menu'>Nano Technology</Link><br />
            </div>
          </li>
          <li className='dropdown' id='prog'>
            <NavLink className={({ isActive }) => isActive ? "menu_flex_active" : "menu_flex"} to='/programming'>Programming<BiChevronDown /></NavLink>
            <div className='dropdown_menu' id='prog_menu'>
              <Link to='/programming' className='sub_menu'>New Programs</Link><br />
              <Link to='/programming' className='sub_menu'>JavaScript tips</Link><br />
              <Link to='/programming' className='sub_menu'>Computer Programming</Link><br />
              <Link to='/programming' className='sub_menu'>Assembly Languages</Link><br />
            </div>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "menu_flex_active" : "menu_flex"} to="/contact">Contact</NavLink>
          </li>
          <li className='dropdown'>
            <NavLink className={({ isActive }) => isActive ? "menu_flex_active" : "menu_flex"} to="/search"><BsSearch /></NavLink>
          </li>
        </ul>

        <div>
          <Link className='btn_normal my_account'>My account</Link>
          <Link className='btn_normal my_account'>Logout</Link>
          {/* <Link to="/login" className='btn_normal my_account'>Login</Link>
          <Link to="/register" className='btn_normal my_account'>Register</Link> */}
        </div>
        <Link className='menu_bar' onClick={() => setMenu(!menu)}><AiOutlineMenu /></Link>
      </div>

      <div className={`full_menu ${menu ? "active" : ""}`}>
        <ul>
          <li>
            <Link className='menu_flex' to="/search"><BsSearch /></Link>
          </li>
          <li>Home</li>
          <li>Technology</li>
          <li>Programming</li>
          <li>Contact</li>
          <div>
            <li><Link className='list_btn_menu'>My account</Link></li>
            <li><Link className='list_btn_menu'>Logout</Link></li>
            {/* <li><Link to="/login" className='list_btn_menu'>Login</Link></li>
          <li><Link to="/register" className='list_btn_menu'>Register</Link></li> */}
          </div>
          <Link onClick={() => setMenu(!menu)} className='close_btn'>X</Link>
        </ul>
      </div>

    </div>
  );
};

export default Header;