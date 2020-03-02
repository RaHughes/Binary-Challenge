import React from 'react'
import { connect } from 'react-redux';
import './Classes.scss'

const Classes = ({classes}) => {

  const allClasses = classes.map(classs => {
    return ( 
    <div key={Math.random()} className={classs.index}>
      <img />
      <div className='class_info'>
      <h2>{classs.name}</h2>
      <p><span>Hit Dice:</span> {classs.hit_die}</p>
      <p><span>Saving Throws:</span> {classs.saving_throws.map(thing => ` ${thing.name}, `)}</p>
      <p><span>Proficient With:</span> {classs.proficiencies.map(thing => ` ${thing.name}, `)}</p>
      </div>
    </div> )
  })

  return (
    <section>{allClasses}</section>
  )
}

export const mapStateToProps = state => ({
  classes: state.classes,
})

export default connect(mapStateToProps)(Classes);