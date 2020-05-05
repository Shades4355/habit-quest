import React from 'react'


const HabitTile = props => {
  const id = props.id
  const name =props.name

  return(
    <div>
      {name}
      {id}
    </div>
  )
}

export default HabitTile
