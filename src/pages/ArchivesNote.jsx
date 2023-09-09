import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getArchivedNotes } from '../utils/network-data'
import CardList from '../components/CardList'
import LocaleContext from '../context/LocalContext'
import Loading from '../components/Loading'

function ArchivesNote () {
  const [notes, setNotes] = React.useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [keyword, setKeyword] = React.useState(
    searchParams.get('keyword') || ''
  )

  const { loading, onSetLoading, language } = React.useContext(LocaleContext)

  function onKeywordChange (keyword) {
    setKeyword(keyword)
    setSearchParams({ keyword })
  }

  async function fetchGetArchivedNotes () {
    onSetLoading(true)
    const { error, data } = await getArchivedNotes()
    if (!error) {
      setNotes(data)
    }
    onSetLoading(false)
  }

  React.useEffect(() => {
    fetchGetArchivedNotes()
  }, [])

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <section className='main-content'>
      <div className='header-content'>
        <h3>{language === 'id' ? 'Catatan Arsip' : 'Archive Notes'}</h3>
        <input
          type='text'
          placeholder='Search by title ...'
          value={keyword}
          onChange={e => onKeywordChange(e.target.value)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : filteredNotes.length ? (
        <div className='notes'>
          <CardList notes={filteredNotes} />
        </div>
      ) : (
        <h1>{language === 'id' ? 'Arsip Kosong' : 'Empty Archive'}</h1>
      )}
    </section>
  )
}

export default ArchivesNote
