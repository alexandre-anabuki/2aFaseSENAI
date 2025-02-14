import './Corpo.css'
function Corpo(){
    function alertarUsuario(){
        alert("CUIDADO!!")
    }
    return(
        <div className="container-corpo">
            <h1>Testando o React</h1>
            <p>Praticando com o execício</p>
            <button onClick={alertarUsuario}>Alerta</button>
            <img className='imagem' src="./1200x1200bb.jpg" alt="" />
            6+6={6+6}
        </div>
    )
}

export default Corpo;