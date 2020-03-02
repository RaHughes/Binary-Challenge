import React from 'react';
import { connect } from 'react-redux';
import './Spells.scss';

const Spells = ({spells}) => {
  const allSpells = spells.map(spell => {
    return ( 
    <div key={Math.random()}>
      <h2>{spell.name}</h2>
      <p>{spell.desc}</p>
    </div> )
  })

  return (
    <section>{allSpells}</section>
  )
}

export const mapStateToProps = state => ({
  spells: state.spells,
})

export default connect(mapStateToProps)(Spells);