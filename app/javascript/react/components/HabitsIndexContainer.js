import React, { useState, useEffect } from 'react'

import HabitTile from './HabitTile'

const HabitsIndexContainer = props => {
  const [habits, setHabits] = useState([{}])
  const [userHabits, setUserHabits] = useState()

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

  useEffect(() =>{
    fetch('/api/v1/userhabits',
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
    .then(userhabitsBody => {
      setUserHabits(userhabitsBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let today_score = 0
  if (userHabits !== undefined) {
    let dailyMap = userHabits.today.map(userhabit =>{
      today_score += userhabit.habit.value
    })
  }

  let monthly_score = 0
  if (userHabits !== undefined) {
    let dailyMap = userHabits.this_month.map(userhabit =>{
      monthly_score += userhabit.habit.value
    })
  }

  let setGoal = 0
  let habitTile = habits.map((habit) =>{
    setGoal += habit.value
    return (
      <HabitTile
        key={habit.id}
        id={habit.id}
        name={habit.name}
        value={habit.value}
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
        Please <a href='/users/sign_in'>Log In</a> To Continue
      </div>
    )
  } else {
    return(
      <div className='grid-x grid-margin-x'>
        <div className='cell small-4'>
          Daily Goal: {setGoal}
        </div>
        <div className='cell small-4'>
          Today's Score: {today_score}
        </div>
        <div className='cell small-4'>
          This Month's Score: {monthly_score}
        </div>
        <div className='cell small-12'>
          Monthly Goal: {setGoal * .9}
        </div>
        <div>
          {habitTile}
        </div>
      </div>
    )
  }
}

export default HabitsIndexContainer
