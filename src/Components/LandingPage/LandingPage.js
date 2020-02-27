import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './LandingPage.scss'

const LandingPage = () => {
return (
  <section className='landing_page'>
    <div className='landing_div'>
      <h1>Fifth Edition</h1>
      <h2>Simple Resource</h2>
      <div className='enter_btn'>
      <NavLink to='/main' type='button'>Enter</NavLink>
      </div>
    </div>
  </section>
)}

export default LandingPage;