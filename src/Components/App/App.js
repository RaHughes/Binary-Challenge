import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import Classes from '../Classes/Classes.js';
import Spells from '../Spells/Spells.js';
import Monsters from '../Monsters/Monsters.js';
import { fetchClasses, fetchSpells, fetchMonsters } from '../../Helpers/apiCalls';
import { loadClasses, loadSpells, loadMonsters } from '../../Actions/index';


export class App extends Component {
  constructor() {
    super();
    this.state = {
      classes: undefined,
      spells: undefined
    }
  }

  componentDidMount() {
    fetchClasses()
    .then(data => this.props.loadClasses(data.results))
    fetchSpells()
    .then(data => this.props.loadSpells(data.results))
    fetchMonsters()
    .then(data => this.props.loadMonsters(data.results))
  }

  render() {
  return (
    <main className="App">
      <h1>Welcome to DnD 5E Simple Resource!</h1>
        <nav>
          <NavLink to='/classes' type='button'>Classes</NavLink>
          <NavLink to='/spells' type='button'>Spells</NavLink>
          <NavLink to='/monsters' type='button'> Monsters </NavLink>
          <p>Character Sheets</p>
      </nav>
      <Route exact path='/classes' component={Classes} />
      <Route exact path='/spells' component={Spells} />
      <Route exact path='/monsters' component={Monsters} />
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
