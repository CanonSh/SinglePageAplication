import React from 'react'
import { Link } from 'react-router'

export const BotonFormulario = () => {
  return (
    <div style={{position: 'fixed', right: '20vw',bottom:'12vh'}}>
      <Link to="/Peticion"><img src="https://cdn-icons-png.flaticon.com/512/4366/4366909.png" alt="Solicitud" style={{objectFit: 'contain', width: '5vw', height: '10vh',filter:'opacity(95%)',transition:'filter 0.3s'}} onMouseEnter={e => e.currentTarget.style.filter = 'opacity(100%)'} onMouseLeave={e => e.currentTarget.style.filter = 'opacity(95%)'}/></Link>
    </div>
  )
}

 