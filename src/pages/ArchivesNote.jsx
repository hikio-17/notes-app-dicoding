import React from 'react'
import { getArchivedNotes } from '../utils/local-data'
import CardList from '../components/CardList'

class ArchivesNote extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: getArchivedNotes(),
      keyword: ''
    }

    this.onKeywordChange = this.onKeywordChange.bind(this)
  }

  onKeywordChange (keyword) {
    this.setState(() => {
      return {
        keyword
      }
    })
  }

  render () {
    const notes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    )
    return (
      <section className='main-content'>
        <div className='header-content'>
          <h3>Catatan Arsip</h3>
          <input
            type='text'
            placeholder='Search by title ...'
            value={this.state.keyword}
            onChange={e => this.onKeywordChange(e.target.value)}
          />
        </div>
        <div className='notes'>
          {notes.length ? (
            <CardList notes={notes} />
          ) : (
            <h1
              style={{
                textAlign: 'center',
                color: 'white',
                marginTop: '100px'
              }}
            >
              Arsip Kosong
            </h1>
          )}
        </div>
      </section>
    )
  }
}

export default ArchivesNote
