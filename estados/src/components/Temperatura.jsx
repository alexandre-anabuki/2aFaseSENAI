import {useState} from 'react'

function Temperatura() {
    const [celsius, setCelsius] = useState(0)
    const [fare, setFare] = useState(0)
    const [kelvin, setKelvin] = useState(0)
    function converterTemperatur(){
        let entrada = Number(prompt("Temperatura em C: "))
        setFare(((entrada * 9/5) + 32).toFixed(2))
        setKelvin((entrada + 273.15).toFixed(2))
        setCelsius(entrada)
    }
  return (
    <div>
        <h2>Celsius para Fareheint para Kelvin</h2>
        <button onClick={converterTemperatur}>Converter</button>

        <p>
            Celsius: {celsius}
        </p>
        <p>
            Farenheit: {fare}
        </p>
        <p>
            Kelvin: {kelvin}
        </p>
    </div>
  )
}

export default Temperatura