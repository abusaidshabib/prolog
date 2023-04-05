import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {

  const error = useRouteError();

  console.log(error);

  return (
    <div className='error_div'>
      <div>
        <h1 className='etitleror'>{error.status}</h1>
        <p className='error_para_nm'>{error.statusText}<br/>{error.data}</p>
       </div>
       <div>
        <Link className='btn_outline' to="/">Back to Home</Link>
       </div>
    </div>
  );
};

export default ErrorPage;