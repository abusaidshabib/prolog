import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TipsProg.css';
import { ApiDataContext } from '../../../../Context/ApiContext/ApiContext';

const TipsProg = () => {

  const { datas } = useContext(ApiDataContext);
  return (
    <div className='up_div'>
      <h1>Programming Tips</h1>
      <div>
        {
          datas?.slice(0, 5).map(data => <Link key={data._id} to={`../blog/${data._id}`} className='small_div'>
            <img className='small_img' src={data.img} alt="" />
            <div>
              <p className='small_title'>{data.title}</p>
              <p className='small_para'>{data.Description?.slice(0, 70)}</p>
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default TipsProg;