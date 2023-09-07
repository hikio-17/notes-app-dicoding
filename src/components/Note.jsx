import React from 'react'
import { dateFormatter } from '../utils/local-data'
import Button from './Button'
import parser from 'html-react-parser'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Note ({
  note,
  handleArchiveNote,
  handleUnarchiveNote,
  handleDeleteNote
}) {
  const { title, createdAt, id, archived, body } = note
  return (
    <section>
      <div className='note'>
        <h3 className='title'>{title}</h3>
        <h4 className='date'>{dateFormatter.format(new Date(createdAt))}</h4>
        <p className='body'>{parser(body)}</p>
        <div className='action-group'>
          <Button
            id={id}
            archived={archived}
            handleArchiveNote={handleArchiveNote}
            handleUnarchiveNote={handleUnarchiveNote}
            handleDeleteNote={handleDeleteNote}
          />
          <button id='btn-edit'>
            <Link to={`/notes/edit/${id}`}>Edit Note</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired
}

export default Note
