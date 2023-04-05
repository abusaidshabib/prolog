import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';

const Search = () => {

  const { datas } = useContext(ApiDataContext);

  return (
    <div className='m_div1'>
      <div className='search_field' id="search_f">
        <div className=''>
          <input type="" name="" /><Link className='search_btn'>Search</Link>
        </div>
      </div>
      {
        datas.map(data => (<div className='grid_card_code' key={data.id}>
          <img className='pro_img' src={data.img} alt="" />
          <div>
            <p className='small_title'>{data.title}</p>
            <p className='small_para'>{data.Description.slice(0, 350)}</p>
          </div>
        </div>))
      }
    </div>
  );
};

export default Search;