import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import GamesIndexContainer from './GamesIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GamesIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
