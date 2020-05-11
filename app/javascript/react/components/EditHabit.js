import React, { useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'

const EditHabit = props => {
  const [habit, setHabit] = useState()
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/habits/${id}/edit`)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(parsedData => {
      setHabit(parsedData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleChange = event => {
      setHabit({
        ...habit,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/v1/habits/${id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(habit),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(parsedData => {
      if (!parsedData.errors){
        setShouldRedirect(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if (shouldRedirect) {
      return <Redirect to={'/'} />
    }
    
if (habit !== undefined){
  return(
    <div className="grid-container">
      <div className='grid-x grid-margin-x align-center'>
        <div className="cell small-12 medium-10">
          <h4>Edit your Habit!</h4>
          <form onSubmit={handleSubmit}>

          <label htmlFor="name" className="text-white">Habit:</label>
          <textarea
            name="name"
            id="name"
            onChange={handleChange}
            value={habit.name}
          />

            <label htmlFor="value" className="text-white">Rating (-5 to 5):</label>
            <input
              type="text"
              name="value"
              id="value"
              onChange={handleChange}
              value={habit.value}
            />

            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
    )
  } else {
    return(
      <h3>
        Loading Edit Form...
      </h3>
    )
  }
}

export default EditHabit
