import React from 'react'
import { FaArrowCircleDown, FaTrash, FaArrowAltCircleUp } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Button ({
  id,
  archived,
  handleDeleteNote,
  handleArchiveNote,
  handleUnarchiveNote
}) {
  return (
    <div className='button-group'>
      <span>
        {archived ? (
          <FaArrowAltCircleUp onClick={() => handleUnarchiveNote(id)} />
        ) : (
          <FaArrowCircleDown onClick={() => handleArchiveNote(id)} />
        )}
      </span>
      <span>
        <FaTrash onClick={() => handleDeleteNote(id)} />
      </span>
    </div>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
  handleUnarchiveNote: PropTypes.func.isRequired
}

export default Button
