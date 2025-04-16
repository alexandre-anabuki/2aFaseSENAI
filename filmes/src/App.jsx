import { useState } from 'react'
import './App.css'

function App() {
  const [inputAntigo, setInputAntigo] = useState('')
  const [inputNovo, setInputNovo] = useState('')
  const [resultado, setResultado] = useState()

  function calcularAumento(){
    let antigo = Number(inputAntigo)
    let novo = Number(inputNovo)
    let diferenca = novo - antigo
    let percentual = (diferenca/antigo) * 100

    setResultado(percentual)
  }

  return (
    <>
    <div>
      <label htmlFor="">Valor Antigo</label>
      <input type="text" value={inputAntigo} onChange={(event) => setInputAntigo(event.target.value)}/>
    </div>

    <div>
      <label htmlFor="">Valor Novo</label>
      <input type="text" value={inputNovo} onChange={(event) => setInputNovo(event.target.value)}/>
    </div>

    <button onClick={calcularAumento}>Calcular Diferença</button>

    {resultado > 0 && 
    <div>
      Aumento: {resultado.toFixed(2)}%
    </div>
    }
    </>
  )
}

export default App
