import React, { useContext, } from 'react';
import { Link } from 'react-router-dom';
import './MostView.css';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';

const MostView = () => {
  const { datas } = useContext(ApiDataContext);

  return (
    <div className='m_div1'>
      <p className='title_text'>Most Popular</p>
      <div id='main_div'>
        {
          datas?.slice(0, 4).map(data => (
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