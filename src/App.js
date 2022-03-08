import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

export default function App() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/main-page/">
            <Home />
          </Route>
          <Route path="/main-page/about">
            <About />
          </Route>
          <Route path="/main-page/contact">
            <Contact />
          </Route>
          <Route path="/main-page/*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }