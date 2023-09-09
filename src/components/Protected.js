import React from 'react'
import { Navigate } from 'react-router-dom'
import LocaleContext from '../context/LocalContext'

function Protected ({ children }) {
  const { authedUser } = React.useContext(LocaleContext)

  if (!authedUser) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default Protected
