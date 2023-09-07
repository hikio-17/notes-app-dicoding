import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailNote from './pages/DetailNote'
import ArchivesNote from './pages/ArchivesNote'
import React from 'react'
import AddNoteWrapper from './pages/AddNote'
import EditNoteWrapper from './pages/EditNote'
import NotFound from './pages/NotFound'

function App () {
  return (
    <>
      <header>
        <h3>MyNotes</h3>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes/new' element={<AddNoteWrapper />} />
          <Route path='/notes/:id' element={<DetailNote />} />
          <Route path='/archives' element={<ArchivesNote />} />
          <Route path='/notes/edit/:id' element={<EditNoteWrapper />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
