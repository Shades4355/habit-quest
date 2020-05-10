import React, { useState }  from 'react'


const HabitTile = props => {
  const id = props.id
  const name = props.name
  const value = props.value

  const buttonClick = event => {
    console.log(id + " " + name)
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
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return(
    <div className={`button cell small-6, medium-3`} >
      <div onClick={buttonClick}>
        {name}: {value}
      </div>
      <a href={`/habits/${id}/edit`}>Edit </a>
      <a onClick={deleteHabit}> Delete</a>
    </div>

  )
}

export default HabitTile
