import React from 'react'


const HabitTile = props => {
  const id = props.id
  const name =props.name

  return(
    <div className='button cell'>
      {name}
    </div>
  )
}

export default HabitTile
