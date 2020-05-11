import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HabitsIndexContainer from './HabitsIndexContainer'
import EditHabit from './EditHabit'
import UserShowPage from './UserShowPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HabitsIndexContainer} />
        <Route exact path='/habits/:id/edit' component={EditHabit} />
        <Route exact path='/user/:id' component={UserShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
