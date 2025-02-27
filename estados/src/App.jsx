import { useState } from 'react'
import './App.css'
import Conversoes from './components/Conversoes'
import Conversao2 from './components/Conversao2'

function App() {
  const [usuario, setUsuario] = useState("juca")
  const [senha, setSenha] = useState()

  let nome = "ulib"
  //const [nome, setNome] = useState("ulib")
  function lerNome(){
    nome = prompt("digite o nome ")
    //setNome = prompt("digite o nome")
  }
  function lerUsuario(){
    let resposta = prompt("digite o novo usuario")
    setUsuario(resposta)

    let pw = prompt("digite a nova senha")
    let pw2 = prompt("confirme a senha")
    if(pw == pw2){
      setSenha(pw)
    }
    else{
      alert("senhas diferentes")
    }
  }

  return (
    <>
      <Conversoes />
      <Conversao2 />
      <h1>estados</h1>
      Nome : {nome}
      <div>
        Usuario : {usuario} <br />
        Senha: {senha}
      </div>
      <button onClick={lerNome}>trocar nome</button>
      <button onClick={lerUsuario}>trocar usuario</button>
    </>
  )
}

export default App
