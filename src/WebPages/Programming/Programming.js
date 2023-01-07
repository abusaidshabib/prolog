import React, { useEffect, useState } from 'react';
import TipsProg from '../Home/RightSection/TipsProg/TipsProg';

const Programming = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mostviews')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='m_div1 right_sec'>
      <div>
        <p className='title_text ln_hight'>Programming Updates</p>
        {
          datas.slice(0, 4).map(data => (
            <div className='grid_card_code'>
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

export default Programming;