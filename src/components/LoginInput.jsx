import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'
import LocaleContext from '../context/LocalContext'
import '../styles/registerInput.css'

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('')
  const [password, onPassowrdChange] = useInput('')

  const { language } = React.useContext(LocaleContext)

  function onLogin (event) {
    event.preventDefault()
    login({
      email,
      password
    })
  }
  return (
    <form className='form' onSubmit={onLogin}>
      <div className='form-group'>
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailChange} />
      </div>
      <div className='form-group'>
        <label>{language === 'id' ? 'Kata Sandi' : 'Password'}</label>
        <input type='password' value={password} onChange={onPassowrdChange} />
      </div>
      <button className='form-submit-btn' type='submit'>
        {language === 'id' ? 'Masuk' : 'SigIn'}
      </button>
      <p className='link-login'>
        {language === 'id' ? 'Tidak punya akun?' : "Don't have an account?"}{' '}
        <Link to='/register'>{language === 'id' ? 'Daftar' : 'Register'}</Link>
      </p>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
}

export default LoginInput
