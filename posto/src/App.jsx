import { useState } from 'react'
import './App.css'

function App() {
  const [inputGasolina, setInputGasolina] = useState('')
  const [totalGasolina, setTotalGasolina] = useState(0)

  function venderGasolina(){
    let quantidade = Number(inputGasolina)
    setTotalGasolina(totalGasolina + quantidade)
  }

  function zerar(){
    setTotalGasolina(0)
    
  }
  return (
    <>
    <div>
      <label htmlFor="">Álcool</label>
      <input type="text" />
      <button>+</button>
    </div>

    <div>
      <label htmlFor="">Gasolina</label>
      <input type="text"  value={inputGasolina} onChange={(event) => setInputGasolina(event.target.value)}/>
      <button onClick={venderGasolina}>+</button> {totalGasolina}
    </div>

    <div>
      <label htmlFor="">Disel</label>
      <input type="text" />
      <button>+</button>
    </div>

    <div>
      <button onClick={zerar}>zerar</button>
    </div>


    </>

    
  )
}

export default App
