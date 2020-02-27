import React from 'react';
import { connect } from 'react-redux';
import './Spells.scss';

const Spells = ({spells}) => {
  // console.log(spells)

  const allSpells = spells.map(spell => {
    return ( 
    <div>
      <p>{spell.name}</p>
    </div> )
  })

  return (
    <p>{allSpells}</p>
  )
}

export const mapStateToProps = state => ({
  spells: state.spells,
})

export default connect(mapStateToProps)(Spells);