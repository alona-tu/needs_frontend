import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './styles/global.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Investment from './pages/Investment'
import BackEndSidebar from './components/backend/Sidebar'
import BackEndNavbar from './components/backend/Navbar'
import BackEndDashboard from './pages/BackEnd/Dashboard/Dashboard'

import CreateArticle from './pages/Article/CreateArticle'
import Article from './pages/Article/Article'
import ProductList from './pages/ProductList/ProductList'

const DynamicLayoutRoute = (props) => {
  const { component: RoutedComponent, layout, ...rest } = props

  const actualRouteComponent = (
    <Route {...rest} render={(props) => <RoutedComponent {...props} />} />
  )

  switch (layout) {
    case 'FRONT_END_NAV': {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
    case 'BACK_END_NAV': {
      return (
        <>
          <BackEndNavbar />
          <BackEndSidebar />
          {actualRouteComponent}
        </>
      )
    }
    default: {
      return (
        <>
          <Navbar />
          {actualRouteComponent}
          <Footer />
        </>
      )
    }
  }
}

function App() {
  return (
    <Router>
      <>
        <Switch>
          <DynamicLayoutRoute
            exact
            path="/"
            component={Home}
            layout="FRONT_END_NAV"
          />
          <DynamicLayoutRoute
            path="/Investment"
            component={Investment}
            layout="FRONT_END_NAV"
          />

          <DynamicLayoutRoute
            path="/customer-backend"
            component={BackEndDashboard}
            layout="BACK_END_NAV"
          />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/investment">
            <Investment />
          </Route>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/createArticle">
            <CreateArticle />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
