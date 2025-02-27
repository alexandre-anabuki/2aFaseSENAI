import {useState} from "react"
import './Conversao2.css'
function Conversao2() {
    const [km, setKm] = useState(0)
    const [milhas, setMilhas] = useState(0)
    const [legua, setLegua] = useState(0)
function converterKmParaMilhas(){
    let entrada = Number(prompt("Km: "))
    setMilhas((entrada * 0.621371).toFixed(2))
    setLegua((entrada * 0.207124).toFixed(2))
    setKm(entrada)
}
  return (
    <div className="container-conversao2">
        <h2>kn para milhas para léguas</h2>
        <button onClick={converterKmParaMilhas}>Converter</button>

        <p>
            valor em km: {km}
        </p>
        <p>
            valor em milhas: {milhas}
        </p>
        <p>
            valor em léguas: {legua}
        </p>
    </div>
  )
}

export default Conversao2