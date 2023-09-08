import React from 'react'
import '../styles/registerInput.css';
import LoginInput from './../components/LoginInput';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';

const LoginPage = ({ onLoginSuccess }) => {

   async function onLoginHandler({ email, password }) {
      const { error, data } = await login({ email, password });
      
      if (!error) {
        onLoginSuccess(data);
      }
   }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <LoginInput login={onLoginHandler} />
    </div>
  )
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
}

export default LoginPage
