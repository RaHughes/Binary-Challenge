import React from 'react'
import { connect } from 'react-redux';
import './Monsters.scss'

const Monsters = ({monsters}) => {
  // console.log(monsters)

  const allMonsters = monsters.map(monster => {
    return ( 
    <div>
      <p>{monster.name}</p>
    </div> )
  })

  return (
    <p>{allMonsters}</p>
  )
}

export const mapStateToProps = state => ({
  monsters: state.monsters,
})

export default connect(mapStateToProps)(Monsters);