import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getActiveNotes } from '../utils/network-data'
import CardList from '../components/CardList'
import LocaleContext from '../context/LocalContext'
import Loading from '../components/Loading'

function Home () {
  const [searchParams, setSearchParams] = useSearchParams()
  const [notes, setNotes] = React.useState([])
  const [keyword, setKeyword] = React.useState(
    searchParams.get('keyword') || ''
  )

  const { loading, onSetLoading, language } = React.useContext(LocaleContext)

  function onKeywordChange (keyword) {
    setKeyword(keyword)
    setSearchParams({ keyword })
  }

  async function fetchGetActiveNotes () {
    onSetLoading(true)
    const { error, data } = await getActiveNotes()
    if (!error) {
      setNotes(data)
    }
    onSetLoading(false)
  }

  React.useEffect(() => {
    fetchGetActiveNotes()
  }, [])

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <section className='main-content'>
      <div className='header-content'>
        <h3>{language === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h3>
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
        <h1>{language === 'id' ? 'Tidak ada catatan' : 'No notes'}</h1>
      )}
    </section>
  )
}

export default Home
