import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const HabitTile = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const id = props.id
  const name = props.name
  const value = props.value

  const createLog = event => {
    fetch(`/api/v1/logs`,{
      method: "POST",
      body: JSON.stringify(id),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok){
        setShouldRedirect(true)
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })

    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }


  const deleteHabit = event => {
    fetch(`/habits/${id}`,{
      method: 'DELETE',
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok){
        setShouldRedirect(true)
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
    setShouldRedirect(false)
    window.location.reload()
  }

  return(
    <div className={'button cell callout small-6, medium-6'} >
      <div onClick={createLog}>
        {name}: {value}
      </div>
      <a href={`/habits/${id}/edit`}>Edit </a>
      <a onClick={deleteHabit}> Delete</a>
    </div>

  )
}

export default HabitTile
