import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import { Persona } from "./components/persona";

function App() {
  return (
    <>
      <div className="">
        <Persona name={"Bautista"} />
      </div>
    </>
  )
}

export default App
