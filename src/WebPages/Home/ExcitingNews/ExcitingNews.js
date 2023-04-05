import React from 'react';
import { Link } from 'react-router-dom';
import './ExcitingNews.css';


const ExcitingNews = () => {
  return (
    <div className='exnews_div'>
        <Link className='ex_btn'>Exiting Information</Link>
      <marquee className="marquee_data" behavior="scroll" direction="left">From virtual meetings to streaming entertainment, it's hard to imagine a world without the convenience and connectivity that technology provides. <b>second</b>From virtual meetings to streaming entertainment, it's hard to imagine a world without the convenience and connectivity that technology provides.</marquee>
    </div>
  );
};

export default ExcitingNews;