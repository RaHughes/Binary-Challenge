import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Classes from '../Classes/Classes.js';
import Spells from '../Spells/Spells.js';
import Monsters from '../Monsters/Monsters.js';
import CharacterSheets from '../CharacterSheets/CharacterSheets'
import { fetchClasses, fetchSpells, fetchMonsters } from '../../Helpers/apiCalls';
import { loadClasses, loadSpells, loadMonsters } from '../../Actions/index';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      classes: undefined,
      spells: undefined,
      monsters: undefined
    }
  }

  componentDidMount() {
    fetchClasses()
    .then(data => this.props.loadClasses(data))
    fetchSpells()
    .then(data => this.props.loadSpells(data))
    fetchMonsters()
    .then(data => this.props.loadMonsters(data))
  }

  render() {
  return (
    <main className="App">
      <h1>Welcome to DnD 5E Simple Resource!</h1>
        <nav>
          <NavLink className='nav_btn' to='/classes' type='button'>Classes</NavLink>
          <NavLink className='nav_btn' to='/spells' type='button'>Spells</NavLink>
          <NavLink className='nav_btn' to='/monsters' type='button'> Monsters </NavLink>
          <NavLink className='nav_btn' to='/characters' type='button'>Character Sheets</NavLink>
      </nav>
      <Route exact path='/classes' component={Classes} />
      <Route exact path='/spells' component={Spells} />
      <Route exact path='/monsters' component={Monsters} />
      <Route exact path='/characters' component={CharacterSheets} />
    </main>
  )}
}

export const mapStateToProps = state => ({
  classes: state.classes,
  spells: state.spells,
  monsters: state.monsters
})

export const mapDispatchToProps = dispatch => ({
  loadClasses: classes => dispatch(loadClasses(classes)),
  loadSpells: spells => dispatch(loadSpells(spells)),
  loadMonsters: monsters => dispatch(loadMonsters(monsters))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
