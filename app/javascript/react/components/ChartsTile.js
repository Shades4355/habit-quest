import React, { useState, useEffect} from 'react'
import { Chart } from "react-google-charts"

const ChartsTile = props => {
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

  var this_month_score = 0
  if (logs !== undefined && logs.this_month !== undefined) {
    const thisMonth = logs.this_month.map(log =>{
      this_month_score += log.habit.value
    })
  }

  var last_month_score = 0
  if (logs !== undefined && logs.last_month !== undefined) {
    const lastMonth = logs.last_month.map(log =>{
      last_month_score += log.habit.value
    })
  }

  var two_months_ago_score = 0
  if (logs !== undefined && logs.two_months_ago !== undefined) {
    const twoMonthsAgo = logs.two_months_ago.map(log =>{
      two_months_ago_score += log.habit.value
    })
  }

  var three_months_ago_score = 0
  if (logs !== undefined && logs.three_months_ago !== undefined) {
    const threeMonthsAgo = logs.three_months_ago.map(log =>{
      three_months_ago_score += log.habit.value
    })
  }

  return(
    <div>
    <Chart
width={'600px'}
height={'400px'}
chartType="LineChart"
loader={<div>Loading Chart</div>}
data={[
  ['x', 'monthly score'],
  [-3, three_months_ago_score],
  [-2, two_months_ago_score],
  [-1, last_month_score],
  [-0, this_month_score]
]}
options={{
  hAxis: {
    title: 'Months Ago',
  },
  vAxis: {
    title: 'Score',
  },
}}
rootProps={{ 'data-testid': '1' }}
/>
    </div>
  )
}

export default ChartsTile
