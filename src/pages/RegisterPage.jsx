import React from 'react'
import { register } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import RegisterInput from '../components/RegisterInput'
import LocaleContext from '../context/LocalContext'
import '../styles/registerInput.css'

const RegisterPage = () => {
  const navigate = useNavigate()

  const { language } = React.useContext(LocaleContext)

  async function onRegisterHandler ({ name, email, password }) {
    const { error } = await register({ name, email, password })

    if (!error) {
      navigate('/login')
    }
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>
        {language === 'id' ? 'Daftar Baru' : 'Register'}
      </h2>
      <RegisterInput register={onRegisterHandler} />
    </div>
  )
}

export default RegisterPage
