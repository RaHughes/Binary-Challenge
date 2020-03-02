import React from 'react'
import { connect } from 'react-redux';
import './Monsters.scss'

const Monsters = ({monsters}) => {

  const allMonsters = monsters.map(monster => {
    return ( 
    <div key={Math.random()}>
      <h2>{monster.name}</h2>
      <p><span>Size:</span> {monster.size}</p>
      <p><span>Type:</span> {monster.type}</p>
      <p><span>Alignment:</span> {monster.alignment}</p>
      <p><span>Hit Points:</span> {monster.hit_points}</p>
      <p><span>Hit Dice:</span> {monster.hit_dice}</p>
      <p>Str:{monster.strength} Dex:{monster.dexterity} Con:{monster.consitution} Int:{monster.intelligence} Char:{monster.charisma}</p>
    </div> )
  })

  return (
    <section>{allMonsters}</section>
  )
}

export const mapStateToProps = state => ({
  monsters: state.monsters,
})

export default connect(mapStateToProps)(Monsters);