import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data'
import '../styles/detailNote.css'
import Note from '../components/Note'
import NotFound from './NotFound';

function DetailNote () {
  const navigate = useNavigate();
  const { id } = useParams()
  const note = getNote(id)

  if (!note) return <NotFound />

  function handleArchiveNote(id) {
    archiveNote(id);
    navigate('/');
  }

  function handleUnarchiveNote(id) {
    unarchiveNote(id);
    navigate('/');
  }

  function handleDeleteNote(id) {
    deleteNote(id);
    navigate('/');
  }

  return (
    <section className='detail-note'>
      <h3>Detail Note</h3>
      <Note 
        note={note} 
        handleArchiveNote={handleArchiveNote} 
        handleUnarchiveNote={handleUnarchiveNote} 
        handleDeleteNote={handleDeleteNote}
      />
    </section>
  )
}

export default DetailNote
