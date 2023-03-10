import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MostView.css';

const MostView = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/mostviews')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className='m_div1'>
      <p className='title_text'>Most Popular</p>
      <div id='main_div'>
        {
          datas.slice(0, 4).map(data => (
            <div key={data._id} className='child' style={{
              "background": `url(${data.img})`,
              "backgroundPosition": "center",
              "backgroundRepeat": "no-repeat",
              "width": "100%",
              "height": "100%",
              "backgroundSize": "cover"
            }}>

              <div>
                <p>&nbsp;{data.title}&nbsp;<br />
                  <Link className='read_more'>Read Details</Link>
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default MostView;