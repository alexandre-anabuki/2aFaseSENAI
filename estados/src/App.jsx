import { useState } from 'react'
import './App.css'
import Avisar from './components/Avisar'
import Conversoes from './components/Conversoes'
import Conversao2 from './components/Conversao2'
import Estados from './components/Estados'
import Temperatura from './components/Temperatura'
import AnoBissexto from './components/AnoBissexto'

function App() {


  return (
    <>
      <AnoBissexto />
      <Avisar />
      <Conversoes />
      <Conversao2 />
      <Temperatura />

      <Estados />

    </>
  )
}

export default App
