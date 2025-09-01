import React from 'react'
import { Biblioteca } from '../biblioteca/Biblioteca'
import { Reproductor } from '../../components/Reproductor'
import { Cabecera } from '../../components/Cabecera'

export const Home = () => {
  return (
    <div style={{display: 'flex',flexDirection:'column',alignItems:'center'}}>
      <Cabecera />
      <Biblioteca />
      <Reproductor />
      </div>
  )
}

