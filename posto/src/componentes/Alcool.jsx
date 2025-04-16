import React, { useState } from 'react'

function Alcool() {
    const [alcool, setAlcool] = useState (0)

  return (
    <div>
        <button onClick={() => setAlcool((alcool) => alcool +1)}>Alcool</button>
        Alcool: {alcool}
    </div>
  )
}

export default Alcool