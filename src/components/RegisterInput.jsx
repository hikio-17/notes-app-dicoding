import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onRegister(event) {
    event.preventDefault();
    
    register({
      name,
      email,
      password,
    });
  }
  return (
      <form className="form" onSubmit={onRegister}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" value={name} onChange={onNameChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={email} onChange={onEmailChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" value={password} onChange={onPasswordChange} />
        </div>
        <button className="form-submit-btn" type="submit">Daftar</button>
        <p className='link-login'>Sudah punya akun? <Link to='/login'>Masuk</Link></p>
      </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput