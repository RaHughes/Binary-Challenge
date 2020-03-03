import React, { Component } from 'react'
import './CharacterSheets.scss'
import { connect } from 'react-redux';
import { saveCharacter } from '../../Actions/index.js'

class CharacterSheets extends Component {
  constructor() {
    super()
    this.state = {
      character: undefined,
      name: undefined,
      class: undefined,
      level: undefined,
      race: undefined,
      alignment: undefined,
      str: undefined,
      dex: undefined,
      con: undefined,
      int: undefined,
      wis: undefined,
      char: undefined
    }
  }

  submitForm = () => {
    let character = {
      name: this.state.name,
      class: this.state.class,
      level: this.state.level,
      race: this.state.race,
      alignment: this.state.alignment,
      str: this.state.str,
      dex: this.state.dex,
      con: this.state.con,
      int: this.state.int,
      wis: this.state.wis,
      char: this.state.char
    }
    saveCharacter(character)
  }

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return(
      <section className='character_sheet'>
        <input 
        placeholder='Name' 
        type='text'
        name='name'
        value={this.state.name}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Class' 
        type='text'
        name='class'
        value={this.state.class}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Level' 
        type='text'
        name='level'
        value={this.state.value}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Race' 
        type='text'
        name='race'
        value={this.state.race}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Alignment' 
        type='text'
        name='alignment'
        value={this.state.alignment}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Strength' 
        type='text'
        name='str'
        value={this.state.str}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Dexterity' 
        type='text'
        name='dex'
        value={this.state.dex}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Constitution' 
        type='text'
        name='con'
        value={this.state.con}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Intelligence' 
        type='text'
        name='int'
        value={this.state.int}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Wisdom' 
        type='text'
        name='wis'
        value={this.state.wis}
        onChange={(e) => this.handleChange(e)}
        />
        <input 
        placeholder='Charisma' 
        type='text'
        name='char'
        value={this.state.char}
        onChange={(e) => this.handleChange(e)}/>
        <button
        className='sumbit_btn'
        onClick={() => this.submitForm}
        >Submit</button>
      </section>
    )
  }
}

// export const mapStateToProps = state => ({
//   characters: state.characters,
// })

export const mapDispatchToProps = dispatch => ({
  saveCharacter: characters => dispatch(saveCharacter(characters))
})

export default connect(mapStateToProps)(CharacterSheets);