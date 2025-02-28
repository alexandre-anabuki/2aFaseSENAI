import{useState} from "react"

function Avisar() {
    const [avisar, setAvisar] = useState(false)

    function toggleAviso(){
        setAvisar(!avisar)
    }

  return (
    <div>
        {avisar && <p>Aviso. Proibido o uso de celulares</p>}

        <button onClick={toggleAviso}>Aviso</button>
                
    </div>
  )
}

export default Avisar