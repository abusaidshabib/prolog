import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import FormLogo from '../Components/FormLogo/FormLogo';

const RegisterPage = () => {

  const { createUser, updateUser, verify } = useContext(AuthContext);

  const handleReg = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        const userData = {
          displayName: name
        }
        updateUser(userData)
          .then(() => {
            verify()
              .then(() => {
              })
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }


  return (
    <div className='login_div'>
      <FormLogo></FormLogo>
      <div className='form_input_div'>
        <form className='width_100' onSubmit={handleReg}>
          <label htmlFor='name'>
            Enter Your Name
          </label><br/>
          <input className='input_field' type="text" name="name" id="" /><br/>

          <label htmlFor='email'>
            Enter Your Email
          </label><br/>
          <input className='input_field' type="email" name="email" id="" /><br/>

          <label htmlFor='password'>
            Enter Your Password
          </label><br/>
          <input className='input_field' type="password" name="password" id="" /><br/>

          <input className='form_btn' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;