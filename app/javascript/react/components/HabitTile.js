import React, { useState }  from 'react'


const HabitTile = props => {
  const [buttonValue, setButtonValue] = useState('false')

  const id = props.id
  const name = props.name
  const value = props.value

  let handleButtonClick = () => {
    if (buttonValue === 'false') {
      fetch('/api/v1/userhabits',{
        method: 'POST',
        body: JSON.stringify(props.id)
      })
  .then(response => {
    if(response.ok) {
      setButtonValue('true')
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage)
      throw error
    }
  })
  .then(response => response.json())
  .then(parsedData => {
    if (parsedData.errors){
    setErrors(parsedData.errors)
  }
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
    } else {
      //fetch destroy/delete
      //
      setButtonValue('false')
    }
  }



  return(
    <div className={`button cell small-6, medium-3 ${buttonValue}`} onClick={handleButtonClick}>
      {name}: {value}
    </div>
  )
}

export default HabitTile
