import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './DisplayArea.scss'

export const DisplayArea = () => {
  return (
    <main>
      <h1>Welcome to DnD 5E Simple Resource!</h1>
        <nav>
          <NavLink to='/classes' type='button'>Classes</NavLink>
          <p>Spells</p>
          <p>Monsters</p>
          <p>Character Sheets</p>
      </nav>
    </main>
  )
}