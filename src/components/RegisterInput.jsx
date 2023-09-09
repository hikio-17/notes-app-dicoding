import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import LocaleContext from '../context/LocalContext'

const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  const { language } = React.useContext(LocaleContext)

  function onRegister (event) {
    event.preventDefault()

    register({
      name,
      email,
      password
    })
  }
  return (
    <form className='form' onSubmit={onRegister}>
      <div className='form-group'>
        <label>{language === 'id' ? 'Nama' : 'Name'}</label>
        <input type='text' value={name} onChange={onNameChange} />
      </div>
      <div className='form-group'>
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailChange} />
      </div>
      <div className='form-group'>
        <label>{language === 'id' ? 'Kata Sandi' : 'Password'}</label>
        <input type='password' value={password} onChange={onPasswordChange} />
      </div>
      <button className='form-submit-btn' type='submit'>
        {language === 'id' ? 'Daftar' : 'Register'}
      </button>
      <p className='link-login'>
        {language === 'id' ? 'Sudah punya akun?' : 'Already have an account?'}{' '}
        <Link to='/login'>{language === 'id' ? 'Masuk' : 'SignIn'}</Link>
      </p>
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired
}

export default RegisterInput
