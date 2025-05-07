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
        setInputNome('')
    }

    function sortearcliente(){
      let i = Math.floor(Math.random()*nomes.length)
      alert('cliente sorteado' + nomes[i])
    }

  return (
    <div className="container-sorteio">
        <h2>SORTEIO!!</h2>

        <label htmlFor="">Nome</label>
        <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)} />
        <button onClick={cadastroNome}>Cadastrar</button>
        <button onClick={sortearcliente}>Sortear</button>
    </div>
  )
}

export default Sorteio