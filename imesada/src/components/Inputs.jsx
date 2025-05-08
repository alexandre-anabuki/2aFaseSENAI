import React from 'react'

function Inputs() {
  return (
    <div className='container-input'>
        <input type="number" value={valor} onChange={(event) => setValor(event.target.value)} />

    </div>
  )
}

export default Inputs