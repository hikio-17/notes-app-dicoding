import React from 'react'
import PropTypes from 'prop-types'
import LoginInput from './../components/LoginInput'
import { login } from '../utils/network-data'
import LocaleContext from '../context/LocalContext'
import '../styles/registerInput.css'

const LoginPage = ({ onLoginSuccess }) => {
  const { language } = React.useContext(LocaleContext)

  async function onLoginHandler ({ email, password }) {
    const { error, data } = await login({ email, password })

    if (!error) {
      onLoginSuccess(data)
    }
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>{language === 'id' ? 'Masuk' : 'Login'}</h2>
      <LoginInput login={onLoginHandler} />
    </div>
  )
}

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired
}

export default LoginPage
