import { useState, useEffect } from 'react'
import './Sorteio.css'

function Sorteio() {
    const [inputNome, setInputNome] = useState('')
    const [nomes, setNome] = useState([])

    useEffect(() =>
        console.log(nomes)
    ,[nomes])

    function cadastroNome(){
        setNome([inputNome, ...nomes])
    }
  return (
    <div className="container-sorteio">
        <h2>SORTEIO!!</h2>

        <label htmlFor="">Nome</label>
        <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)} />
        <button onClick={cadastroNome}>Cadastrar</button>
    </div>
  )
}

export default Sorteio