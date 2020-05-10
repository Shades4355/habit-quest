import React, { useState }  from 'react'


const HabitTile = props => {
  const id = props.id
  const name = props.name
  const value = props.value

  const buttonClick = event => {
    console.log(id + " " + name)
  }

  const deleteHabit = event => {
    console.log("Deleted")
  }

  const editHabit = event => {
    console.log("Edited")
  }

  return(
    <div className={`button cell small-6, medium-3`} >
      <div onClick={buttonClick}>
        {name}: {value}
      </div>
      <a onClick={editHabit}>Edit </a>
      <a onClick={deleteHabit}> Delete</a>
    </div>

  )
}

export default HabitTile
