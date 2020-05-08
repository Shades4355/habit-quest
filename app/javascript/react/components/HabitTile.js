import React, { useState }  from 'react'


const HabitTile = props => {
  const id = props.id
  const name = props.name
  const value = props.value

  return(
    <div className={`button cell small-6, medium-3`}>
      {name}: {value}
    </div>
  )
}

export default HabitTile
