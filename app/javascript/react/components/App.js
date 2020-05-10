import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HabitsIndexContainer from './HabitsIndexContainer'
import EditHabit from './EditHabit'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HabitsIndexContainer} />
        <Route exact path='/habits/:id/edit' component={EditHabit} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
