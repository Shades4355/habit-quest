import React, { useState, useEffect } from 'react'

import HabitTile from './HabitTile'
import LogsContainer from './LogsContainer'

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

  let setGoal = 0
  let habitTile = habits.map((habit, index) =>{
    if (habit.value > 0){
      setGoal += habit.value
    }
    return (
      <HabitTile
        key={index}
        id={habit.id}
        name={habit.name}
        value={habit.value}
        user_id={habit.current_user}
      />
    )
  })

  if (habits === []) {
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } else if (habits[0].current_user === undefined) {
    return(
      <div>
        Please <a href='/users/sign_in'>Log In</a> To Continue
      </div>
    )
  } else {
    return(
      <div className='grid-container'>
        <div className='grid-x grid-margin-x'>
          <div className='cell small-6'>
            Daily Goal: {setGoal}
            <br />
            Monthly Goal: {parseInt(setGoal * .8 * 29)}
          </div>
          <div className='cell small-6'>
            <LogsContainer />
          </div>
          <br />
          <div id='habitTile'>
            {habitTile}
          </div>
        </div>
      </div>
    )
  }
}

export default HabitsIndexContainer
