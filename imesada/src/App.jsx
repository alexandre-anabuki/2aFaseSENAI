import { useState } from 'react'
import './App.css'


function App() {
  const [valor, setValor] = useState(0)
  const [inputValor, setInputValor] = useState("")

  function creditar(){
    setValor(valor + Number(inputValor))
  }

  function debitar(){
    setValor(valor - Number(inputValor))
  }

  return (
    <div className='container-app'>

      <div className='titulo'>
        <h1>iMesada</h1>
        <h2>Controle Financeiro</h2>
      </div>

      <p className='mostra-total'>
      Saldo R$ {valor}
      </p>

        <input type="number" className='insira-valor' value={inputValor} onChange={(event) => setInputValor (event.target.value)}/>
      {/* <div className='insira-valor'>

      </div> */}

      <div className='botoes'>
        <button className='botao-credito' onClick={creditar}>Crédito</button>
        <button className='botao-debito' onClick={debitar}>Débito</button>

      </div>

    </div>
  )
}

export default App
