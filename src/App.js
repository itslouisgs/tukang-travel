import React from "react"
import Navbar from "./Navbar"
import "./style.css"
import "./assets/logo.png"


export default function App() {
    return (
      <div>
        <Navbar />
        <h1 className="text-3xl text-center font-bold underline">
          Hello world!
        </h1>
      </div>
    )
  }