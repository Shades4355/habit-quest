import React, { useState, useEffect } from 'react'

import HabitTile from './HabitTile'

const HabitsIndexContainer = props => {
  const [habits, setHabits] = useState([{}])

  useEffect(() =>{
    fetch('/api/v1/habits',
    {credentials: 'same-origin'})
    .then(response => {
      if (response.ok) {
        debugger
        return response
      } else {
        let errorMessage = `${response.statuse} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(habitsBody => {
      setHabits(habitsBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let habitTile = habits.map((habit) =>{
    return (
      <HabitTile
        key={habit.id}
        id={habit.id}
        name={habit.name}
      />
    )
  })

  if (habits === [{}]) {
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } else {
    return(
      <div className='grid-margin-x'>
       {habitTile}
      </div>
    )
  }
}

export default HabitsIndexContainer
