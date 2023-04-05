import React, { useEffect, useState } from 'react';
import UpdateTech from '../RightSection/UpdateTech/UpdateTech';
import './NewTech.css';
import { useContext } from 'react';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';

const NewTech = () => {

const {datas} = useContext(ApiDataContext)

  return (
    <div className='m_div1 right_sec'>
      <div>
        <p className='title_text'>New Technologies</p>
        <div className='div_grid'>
          <div>
            {
              datas?.slice(0, 1).map(data => <div key={data._id} className='large_div'>
                <img src={data.img} alt="" />
                <p className='small_title'>{data.title}</p>
                <p className='small_para'>{data.Description.slice(0, 335)}</p>
              </div>)
            }
          </div>
          <div>
            {
              datas?.slice(1, 5).map(data => <div key={data._id} className='small_div'>
                <img className='small_img' src={data.img} alt="" />
                <div>
                  <p className='small_title'>{data.title}</p>
                  <p className='small_para'>{data.Description.slice(0,45)}...</p>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
      <div>
        <UpdateTech></UpdateTech>
      </div>
    </div>
  );
};

export default NewTech;