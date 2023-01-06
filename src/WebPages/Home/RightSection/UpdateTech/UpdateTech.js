import React, { useEffect, useState } from 'react';
import './UpdateTech.css';
import image1 from '../../../../assets/AdImage1.jpg';

const UpdateTech = () => {

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mostviews')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='up_div'>
      <h1>Update Technologies</h1>
      <div className='up_tech'>
        {
          datas.slice(0,6).map(data => <div>
            <img src={data.img} alt="" />
            <p className='card_title'>{data.title}</p>
          </div>)
        }
      </div>
        <img className='ad_image' src={image1} alt=""/>
    </div>
  );
};

export default UpdateTech;