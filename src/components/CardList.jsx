import React from 'react'
import PropTypes from 'prop-types'
import Card, { cardItemPropTypes } from './Card'

function CardList ({ notes }) {
  return (
    <section className='list-cards'>
      {notes.map((note, i) => (
        <Card key={i} {...note} />
      ))}
    </section>
  )
}

CardList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(cardItemPropTypes)).isRequired
}

export default CardList
