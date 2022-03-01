import React from "react"
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import AboutContainer from './components/AboutContainer'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./style.css"
import "./assets/logo.png"

export default function App() {
    return (
      <div>
        <Navbar />
        <Hero />
        <AboutContainer />
        <Contact />
        <Footer />
      </div>
    )
  }