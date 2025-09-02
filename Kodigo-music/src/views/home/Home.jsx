import React from 'react'
import { Biblioteca } from '../biblioteca/Biblioteca'
import { Reproductor } from '../../components/Reproductor'
import { Cabecera } from '../../components/Cabecera'
import { BotonFormulario } from '../../components/BotonFormulario'

export const Home = () => {
  return (
    <div>
      <Cabecera />
      <Biblioteca />
      <BotonFormulario />
      <div style={{display: 'flex',flexDirection:'column',alignItems:'center'} }>
        <Reproductor />
      </div>
      </div>
  )
}

