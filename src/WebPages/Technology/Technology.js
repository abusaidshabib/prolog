import React, { useContext, useEffect, useState } from 'react';
import UpdateTech from '../Home/RightSection/UpdateTech/UpdateTech';
import { ApiDataContext } from '../../Context/ApiContext/ApiContext';

const Technology = () => {

  const { datas } = useContext(ApiDataContext);

  return (
    <div className='m_div1 right_sec'>
      <div>
        <p className='title_text'>New Technologies</p>
        <div className='div_grid'>
          <div>
            {
              datas?.slice(0, 3).map(data => <div className='large_div'>
                <img src={data.img} alt="" />
                <p className='small_title'>{data.title}</p>
                <p className='small_para'>{data.Description?.slice(0, 200)}</p>
              </div>)
            }
          </div>
          <div>
            {
              datas?.slice(3, 12).map(data => <div className='small_div'>
                <img className='small_img' src={data.img} alt="" />
                <div>
                  <p className='small_title'>{data.title}</p>
                  <p className='small_para'>{data.Description?.slice(0,35)}...</p>
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

export default Technology;