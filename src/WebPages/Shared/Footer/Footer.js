import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer_div'>

      {/* footer_div1 */}
      <div>
        <p className='logo'>Pro<span>log<b>.</b></span></p>
        <div className='sub_div'>
          <input className='footer_input' placeholder='Enter Your Email' type="email" name="email" id="" />
          <Link className='sub_btn'>Subscribe</Link>
        </div>
        <div className='sub_div'>
          <input className='footer_check' type="checkbox" name="" id="subscribe" value="" />
          <label htmlFor="subscribe">Get notifications about top blogs and offers</label>
        </div>
      </div>

      {/* footer_div2 */}
      <div className='content_center'>
        <ul>
          <li>
            <Link className='menu_flex' to='/home'>Home</Link>
            </li>
          <li>
            <Link className='menu_flex' to='/technology'>Technology</Link>
            </li>
          <li>
            <Link className='menu_flex' to='/programming'>Programming</Link>
          </li>
          <li>
            <Link className="menu_flex" to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>

      {/* footer_div3 */}
      <div className='content_center'>
        <ul>
          <li>
            <Link className='menu_flex' to='/programming'>Programming</Link>
          </li>
          <li>
            <Link to='/technology' className='sub_menu'>Nano Technology</Link>
          </li>
          <li>
            <Link to='/technology' className='sub_menu'>New Updates</Link>
          </li>
          <li>
            <Link to='/technology' className='sub_menu'>New Technology</Link>
          </li>
          <li>
            <Link to='/programming' className='sub_menu'>JavaScript Tips</Link>
          </li>
        </ul>
      </div>

      {/* footer_div4 */}
      <div className='footer_icons'>
        <ul>
          <li>
            <a rel='noreferrer' href="https://www.linkedin.com/in/abusaidshabib/" target="_blank" ><FaLinkedinIn /></a>
            <p>LinkedIn</p>
          </li>
          <li>
            <a rel='noreferrer' href="https://github.com/abusaidshabib" target="_blank"><FaGithub /></a>
            <p>Github</p>
          </li>
          <li>
            <a rel='noreferrer' href="https://www.facebook.com/abusaidshabibofficial" target="_blank"><FaFacebookF /></a>
            <p>Facebook</p>
          </li>
          <li>
            <a rel='noreferrer' href="https://twitter.com/abusaidshabib" target="_blank"><FaTwitter /></a>
            <p>Twitter</p>
          </li>
          <li>
            <a rel='noreferrer' href="https://www.instagram.com/abusaidshabibofficial/" target="_blank"><FaInstagram /></a>
            <p>Instagram</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;