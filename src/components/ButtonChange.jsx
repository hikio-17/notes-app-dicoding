import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import LocaleContext from '../context/LocalContext'
import '../styles/buttonChange.css'

function ButtonChange () {
  const { onToggleTheme, onToggleChangeLanguage, theme, language } =
    React.useContext(LocaleContext)

  return (
    <section id='button-change'>
      <button
        style={
          theme === 'dark'
            ? { backgroundColor: 'white' }
            : { backgroundColor: 'black' }
        }
        onClick={onToggleTheme}
      >
        {theme === 'dark' ? (
          <FiSun style={{ color: 'black' }} />
        ) : (
          <FiMoon style={{ color: 'white' }} />
        )}
      </button>
      <button onClick={onToggleChangeLanguage}>
        {language === 'id' ? 'ID' : 'EN'}
      </button>
    </section>
  )
}

export default ButtonChange
