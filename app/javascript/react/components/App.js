import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HabitsIndexContainer from './HabitsIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HabitsIndexContainer} />

      </Switch>
    </BrowserRouter>
  )
}

export default App
