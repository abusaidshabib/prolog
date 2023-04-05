import React, { useContext, useState } from 'react';
import TipsProg from '../RightSection/TipsProg/TipsProg';
import "./NewCode.css";
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
const NewCode = () => {
  const { datas } = useContext(ApiDataContext);

  return (
    <div className='m_div1 right_sec'>
      <div>
        <p className='title_text ln_hight'>Programming Updates</p>
        {
          datas?.slice(0, 2).map(data => (
            <div key={data._id} className='grid_card_code'>
              <img className='pro_img' src={data.img} alt="" />
              <div>
                <p className='small_title'>{data.title}</p>
                <p className='small_para'>{data.Description.slice(0, 350)}</p>
              </div>
            </div>
          ))
        }
      </div>
      <TipsProg></TipsProg>
    </div>
  );
};

export default NewCode;