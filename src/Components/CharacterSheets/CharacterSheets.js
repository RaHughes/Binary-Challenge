import React, { Component } from 'react'
import './CharacterSheets.scss'

class CharacterSheets extends Component {
  constructor() {
    super()
    this.state = {
      name: undefined,
    }
  }

  render(){
    return(
      <section className='character_sheet'>
        <input placeholder='Name' type='text'/>
        <input placeholder='Class' type='text'/>
        <input placeholder='Level' type='text'/>
        <input placeholder='Race' type='text'/>
        <input placeholder='Alignment' type='text'/>
        <input placeholder='Strength' type='text'/>
        <input placeholder='Dexterity' type='text'/>
        <input placeholder='Constitution' type='text'/>
        <input placeholder='Intelligence' type='text'/>
        <input placeholder='Wisdom' type='text'/>
        <input placeholder='Charisma' type='text'/>
        <button>Submit</button>
      </section>
    )
  }
}

export default CharacterSheets;