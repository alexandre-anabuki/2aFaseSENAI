import { useState } from 'react'
import './AnoBissexto.css'
function AnoBissexto() {
    const [resultado, setResultado] = useState('resultado não calculado')

    function lerAno(){
        let ano = Number(prompt("digite o ano: "))
        if(ano % 4 == 0){
            setResultado("é bissexto")
        }
        else{
            setResultado("não é bissexto")
        }
    }

  return (
    <div className='container-anoBissexto'>
        <h2>AnoBissexto</h2>
        
        <button onClick={lerAno}>Informar Ano</button>
        <p>
            {resultado}
        </p>
    </div>
  )
}

export default AnoBissexto