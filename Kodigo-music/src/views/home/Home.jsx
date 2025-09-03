import React from 'react'
import { Biblioteca } from '../biblioteca/Biblioteca'
import { Reproductor } from '../../components/Reproductor'
import { Cabecera } from '../../components/Cabecera'
import { BotonFormulario } from '../../components/BotonFormulario'

export const Home = () => {
  return (
    <div>

      <div style={{display: 'flex',flexDirection:'column',alignItems:'center'} }>
              <Cabecera />
      <Biblioteca />
      <BotonFormulario />
        <Reproductor />
      </div>
      </div>
  )
}

