import { useState } from 'react'
import './App.css'
import Produto from './components/Produto'

function App() { 
  const [produtos, setProdutos] = useState([
    {
      modelo: "Melancia",
      preco: 22
    },
    {
      modelo: "Pneu",
      preco: 220
    },
    {
      modelo: "Garrafa",
      preco: 2
    },
    {
      modelo: "Notebook",
      preco: 6000
    },
    {
      modelo: "Desktop",
      preco: 600
    },
  ])

  function testar(){
    console.log(produtos)
  }

  return (
    <div className='container-app'>
      <Produto modelo={"Galaxy A15"} preco={815}/>
      <Produto modelo={"Smart TV 32''"} preco={971.10}/>
      <Produto modelo={produtos[0].modelo} preco={produtos[0].preco}/>
      <Produto modelo={produtos[1].modelo} preco={produtos[1].preco}/>
      <Produto modelo={produtos[2].modelo} preco={produtos[2].preco}/>
      
      <button onClick={testar}>TESTAR</button>

      {produtos.map((p) => (
        <Produto modelo={p.modelo} preco={p.preco} />
      ))}

    </div>
  )
}

export default App
