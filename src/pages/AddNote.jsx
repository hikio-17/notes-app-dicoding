import React from 'react'
import '../styles/addNote.css'
import { addNote } from '../utils/local-data'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function AddNoteWrapper () {
  const navigate = useNavigate()

  function onSubmitHandler (note) {
    addNote(note)
    navigate('/')
  }

  return <AddNote onSubmitHandler={onSubmitHandler} />
}

class AddNote extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      body: ''
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
              {this.state.body === '' ? 'Add your note...' : ''}
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

AddNote.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired
}

export default AddNoteWrapper
