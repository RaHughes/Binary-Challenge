import React from 'react'
import { connect } from 'react-redux';
import './Classes.scss'

const Classes = ({classes}) => {
  // console.log(classes)

  const allClasses = classes.map(classs => {
    return ( 
    <div>
      <p>{classs.name}</p>
    </div> )
  })

  return (
    <p>{allClasses}</p>
  )
}

export const mapStateToProps = state => ({
  classes: state.classes,
})

export default connect(mapStateToProps)(Classes);