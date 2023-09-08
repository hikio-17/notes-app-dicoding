import React from 'react';
import PropTypes from 'prop-types';
import '../styles/registerInput.css';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPassowrdChange] = useInput('');

  function onLogin(event) {
    event.preventDefault();
    login({
      email, password
    });
  }
  return (
      <form className="form" onSubmit={onLogin}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={onPassowrdChange} />
        </div>
        <button className="form-submit-btn" type="submit">Masuk</button>
        <p className='link-login'>Tidak punya akun? <Link to='/register'>Daftar</Link></p>
      </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput