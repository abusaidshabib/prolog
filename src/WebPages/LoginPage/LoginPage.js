import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import FormLogo from '../Components/FormLogo/FormLogo';
import './LoginPage.css';

const LoginPage = () => {

  const { logIn } = useContext(AuthContext);

  const handleLog = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
      const user = result.user;
    })
    .catch(error =>console.log(error));
  }

  return (
    <div className='login_div'>
      <FormLogo></FormLogo>
      <div className='form_input_div'>
        <form onSubmit={handleLog} className='width_100'>
          <label htmlFor='email'>Enter Your Email</label><br />
          <input className='input_field' type="email" name="email" id="" /><br />
          <label htmlFor='password'>Enter Your Password</label><br />
          <input className='input_field' type="password" name="password" id="" /><br />
          <input className='form_btn' type="submit" value="send" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;