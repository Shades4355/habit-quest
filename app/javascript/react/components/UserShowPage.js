import React, { useState, useEffect } from 'react'

const UserShowPage = props => {
  const [user, setUser] = useState()

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/users/${id}`, {
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      debugger
      setUser(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])


  if (user === undefined) {
    return(
      <h3>Loading...</h3>
    )
  } else {
    return(
      <div className='grid-container grid-x grid-margin-x'>
        Your Profile
      </div>
    )
  }
}

export default UserShowPage
