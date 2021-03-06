import React, { useState, useEffect } from 'react'

const LogsContainer = props => {
  const [logs, setLogs] = useState()

  useEffect(() =>{
    fetch('/api/v1/logs',
    {credentials: 'same-origin'})
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
      setLogs(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let today_score = 0
  if (logs !== undefined) {
    let dailyMap = logs.today.map(log =>{
      today_score += log.value
    })
  }

  let monthly_score = 0
  if (logs !== undefined && logs.this_month !== undefined) {
    let dailyMap = logs.this_month.map(log =>{
      monthly_score += log.value
    })
  }

  return (
    <div>
      <div>
        Today's Score: {today_score}
      <br />
        This Month's Score: {monthly_score}
      </div>
    </div>
  )
}

export default LogsContainer
