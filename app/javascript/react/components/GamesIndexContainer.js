import React, { useState, useEffect } from 'react'

import HabitTile from './HabitTile'

const GamesIndexContainer = props => {
  const [getHabits, setHabits] = useState([{}])

  useEffect(() =>{
    fetch('/api/v1/habits',
    {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.statuse} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json)
    .then(habits => {
      setHabits(habits)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])
  let habitTile = getHabits.map((habit) =>{
    return (
      <HabitTile
        key={habit.id}
        id={habit.id}
        name={habit.name}
      />
    )
  })

  if (getHabits === [{}]) {
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } else {
    return(
      <div>
       {habitTile}
      </div>
    )
  }
}

export default GamesIndexContainer
