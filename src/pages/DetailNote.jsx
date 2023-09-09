import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote
} from '../utils/network-data'
import '../styles/detailNote.css'
import Note from '../components/Note'
import LocaleContext from '../context/LocalContext'
import Loading from '../components/Loading'

function DetailNote () {
  const navigate = useNavigate()
  const { id } = useParams()
  const [note, setNote] = React.useState(null)

  const { loading, onSetLoading, language } = React.useContext(LocaleContext)

  async function fetchGetNote () {
    onSetLoading(true)
    const { error, data } = await getNote(id)

    if (!error) {
      setNote(data)
    }
    onSetLoading(false)
  }

  React.useEffect(() => {
    fetchGetNote()
  }, [])

  async function onHandleArchiveNote (id) {
    await archiveNote(id)
    navigate('/')
  }

  async function onHandleUnarchiveNote (id) {
    await unarchiveNote(id)
    navigate('/')
  }

  async function onHandleDeleteNote (id) {
    await deleteNote(id)
    navigate('/')
  }

  return (
    <section className='detail-note'>
      <h3>{language === 'id' ? 'Detail Note' : 'Detail Notes'}</h3>
      {loading ? (
        <Loading />
      ) : note !== null ? (
        <Note
          note={note}
          handleArchiveNote={onHandleArchiveNote}
          handleUnarchiveNote={onHandleUnarchiveNote}
          handleDeleteNote={onHandleDeleteNote}
        />
      ) : (
        !note && (
          <h1 style={{ color: 'white', fontSize: '32px', textAlign: 'center', marginTop: '100px' }}>
            {language === 'id' ? 'Catatan tidak ditemukan' : 'Note not found'}
          </h1>
        )
      )}
    </section>
  )
}

export default DetailNote
