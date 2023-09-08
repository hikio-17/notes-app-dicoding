import React from 'react';
import RegisterInput from '../components/RegisterInput';
import '../styles/registerInput.css';
import { register } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  async function onRegisterHandler({ name, email, password }) {
    const { error } = await register({ name, email, password });

    if (!error) {
      navigate('/login');
    }
  }

  return (
    <div className="form-container">
      <h2 className='form-title'>Register</h2>
      <RegisterInput register={onRegisterHandler} />
    </div>
  )
}

export default RegisterPage