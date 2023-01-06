import React, { useEffect, useState } from 'react';
import './TipsProg.css';

const TipsProg = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mostviews')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='up_div'>
      <h1>Programming Tips</h1>
      <div>
        {
          datas.slice(0, 5).map(data => <div className='small_div'>
            <img className='small_img' src={data.img} alt="" />
            <div>
              <p className='small_title'>{data.title}</p>
              <p className='small_para'>{data.Description.slice(0, 70)}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default TipsProg;