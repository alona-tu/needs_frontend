import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HomeRouter from './pages/HomeRouter'
import BackEndApp from './pages/backend/BackEndApp'

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <HomeRouter />
          </Route>
          <Route path="/customer-backend">
            <BackEndApp />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
