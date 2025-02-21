import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("juca")

  let nome = "ulib"
  function lerNome(){
    nome = prompt("digite o nome ")
  }
  function lerUsuario(){
    let resposta = prompt("digite o novo usuario")
    setUsuario(resposta)
  }

  return (
    <>
      <h1>estados</h1>
      Nome : {nome}
      <div>
        Usuario : {usuario}
      </div>
      <button onClick={lerNome}>trocar nome</button>
      <button onClick={lerUsuario}>trocar usuario</button>
    </>
  )
}

export default App
