import React from 'react'
import './Saldo.css'
function Saldo(props) {
  return (
    <div className='container-saldo'>
        <p>SALDO R$</p>
        {/* <p>Saldo R$ {props.total.toFixed(2)}</p> */}
    </div>
  )
}

export default Saldo