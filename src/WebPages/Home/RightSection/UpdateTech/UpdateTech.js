import React, { useContext, useEffect, useState } from 'react';
import './UpdateTech.css';
import image1 from '../../../../assets/AdImage1.jpg';
import { Link } from 'react-router-dom';
import { ApiDataContext } from '../../../../Context/ApiContext/ApiContext';

const UpdateTech = () => {

  const { datas } = useContext(ApiDataContext);

  return (
    <div className='up_div'>
      <h1>Update Technologies</h1>
      <div className='up_tech'>
        {
          datas?.slice(0,6).map(data => <Link key={data._id} to={`../blog/${data._id}`} className='link_none'>
            <img src={data.img} alt="" />
            <p>{data.title}</p>
          </Link>)
        }
      </div>
        <img className='ad_image' src={image1} alt=""/>
    </div>
  );
};

export default UpdateTech;