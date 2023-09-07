import React from 'react'
import '../styles/addNote.css'
import { editNote, getNote } from '../utils/local-data'
import { useNavigate, useParams } from 'react-router-dom'
import parser from 'html-react-parser'
import PropTypes from 'prop-types'

function EditNoteWrapper () {
  const navigate = useNavigate()
  const { id } = useParams()

  const note = getNote(id)

  function onSubmitHandler (note) {
    const updateNote = {
      ...note,
      id
    }
    editNote(updateNote)
    navigate(`/notes/${id}`)
  }

  return <EditNote note={note} onSubmitHandler={onSubmitHandler} />
}

class EditNote extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    }

    this.onInputHandler = this.onInputHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler (event) {
    this.setState(() => {
      return {
        title: event.target.value
      }
    })
  }

  onInputHandler (event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML
      }
    })
  }

  render () {
    return (
      <section className='add-note'>
        <h3>Add Note</h3>
        <div className='form-add-note'>
          <input
            type='text'
            placeholder='Title...'
            value={this.state.title}
            onChange={this.onChangeHandler}
          />
          <div className='body'>
            <div
              className='input-body'
              contentEditable
              onInput={this.onInputHandler}
              suppressContentEditableWarning={true}
            >
              {parser(this.state.body)}
            </div>
            <button
              id='btn-save'
              onClick={() => this.props.onSubmitHandler(this.state)}
            >
              Save
            </button>
          </div>
        </div>
      </section>
    )
  }
}

EditNote.propTypes = {
  note: PropTypes.object.isRequired,
  onSubmitHandler: PropTypes.func.isRequired
}

export default EditNoteWrapper
