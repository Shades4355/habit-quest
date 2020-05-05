import React, { useState, useEffect } from 'react'

import HabitTile from './HabitTile'

const HabitsIndexContainer = props => {
  const [habits, setHabits] = useState([{}])

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
        user_id={habit.current_user}
      />
    )
  })

  if (habits === [{}]) {
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } else if (habits[0].current_user === null) {
    return(
      <div>
        Please <a href='/users/sign_in'>Log In</a>
      </div>
    )
  } else {
    return(
      <div className='grid-margin-x'>
        <br></br>
        {habitTile}
      </div>
    )
  }
}

export default HabitsIndexContainer
