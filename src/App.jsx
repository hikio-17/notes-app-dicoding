import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DetailNote from './pages/DetailNote'
import ArchivesNote from './pages/ArchivesNote'
import AddNote from './pages/AddNote'
import EditNote from './pages/EditNote'
import NotFound from './pages/NotFound'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { getUserLogged, putAccessToken } from './utils/network-data'
import Protected from './components/Protected'
import { LocaleProvider } from './context/LocalContext'
import ButtonChange from './components/ButtonChange'

function App () {
  const [authedUser, setAuthedUser] = React.useState(null)
  const [initializing, setInitializing] = React.useState(true)
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const [loading, setLoading] = React.useState(false)
  const [language, setLanguage] = React.useState(
    () => localStorage.getItem('language') || 'id'
  )

  const navigate = useNavigate()

  const localeContext = React.useMemo(() => {
    return {
      authedUser,
      loading,
      theme,
      language,
      onToggleTheme,
      onSetLoading,
      onToggleChangeLanguage
    }
  }, [authedUser, loading, theme, language])

  function onSetLoading (value) {
    setLoading(value)
  }

  function onToggleTheme () {
    setTheme(prevState => {
      const newTheme = prevState === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      document.documentElement.setAttribute('data-theme', newTheme)
      return newTheme
    })
  }

  function onToggleChangeLanguage () {
    setLanguage(prevState => {
      const newLanguage = prevState === 'id' ? 'en' : 'id'
      localStorage.setItem('language', newLanguage)
      return newLanguage
    })
  }

  async function onLoginSuccess ({ accessToken }) {
    putAccessToken(accessToken)
    const { data } = await getUserLogged()

    setAuthedUser(data)
    navigate('/')
  }

  function onLogoutHandler () {
    putAccessToken('')
    setAuthedUser(null)
  }

  React.useEffect(() => {
    async function fetchGetUserLogged () {
      const { error, data } = await getUserLogged()

      if (!error) {
        setAuthedUser(data)
      }
      setInitializing(false)
    }
    fetchGetUserLogged()
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )
  }, [])

  if (initializing) {
    return null
  }

  return (
    <LocaleProvider value={localeContext}>
      <header>
        <h3>MyNotes</h3>
        <Navbar logOut={onLogoutHandler} />
      </header>
      <main>
        <ButtonChange />
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route
            path='/login'
            element={<LoginPage onLoginSuccess={onLoginSuccess} />}
          />
          <Route path='*' element={<NotFound />} />

          <Route
            path='/'
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path='/notes/new'
            element={
              <Protected>
                <AddNote />
              </Protected>
            }
          />
          <Route
            path='/notes/:id'
            element={
              <Protected>
                <DetailNote />
              </Protected>
            }
          />
          <Route
            path='/archives'
            element={
              <Protected>
                <ArchivesNote />
              </Protected>
            }
          />
          <Route
            path='/notes/edit/:id'
            element={
              <Protected>
                <EditNote />
              </Protected>
            }
          />
        </Routes>
      </main>
    </LocaleProvider>
  )
}

export default App
